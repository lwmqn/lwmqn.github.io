<a name="APIs"></a>
## 6. APIs

* [new MqttNode()](#API_MqttNode)
* [setDevAttrs()](#API_setDevAttrs)
* [initResrc()](#API_initResrc)
* [readResrc()](#API_readResrc)
* [writeResrc()](#API_writeResrc)
* [connect()](#API_connect)
* [close()](#API_close)
* [pubRegister()](#API_pubRegister)
* [pubDeregister()](#API_pubDeregister)
* [pubNotify()](#API_pubNotify)
* [pingServer()](#API_pingServer)
* [publish()](#API_publish)
* [subscribe()](#API_subscribe)
* [unsubscribe()](#API_unsubscribe)  

*************************************************

### MqttNode Class

Exposed by `require('mqtt-node')`  
  
<br />

*************************************************
<a name="API_MqttNode"></a>
### new MqttNode(clientId, devAttrs)
Create an instance of `MqttNode` class.  
  
**Arguments:**  

1. `clientId` (_String_): clientId should be a string and should be unique in the network. Using mac address (with a prefix or suffix) as the clientId would be a good idea.  
2. `devAttrs` (_Object_): An object to describe information about the device. The following table shows details of each property within `devAttrs` object.  

| Property | Type   | Mandatory | Description                                                                            |  
|----------|--------|-----------|----------------------------------------------------------------------------------------|  
| lifetime | Number | optional  | Default is 86400. Unit: seconds                                                        |  
| version  | String | optional  | Minimum supported LWMQN version (this is not really effective at this moment)          |  
| ip       | String | optional  | Device ip address. By default, mqtt-node itself will query this parameter from system  |  
| mac      | String | optional  | Device mac address. By default, mqtt-node itself will query this parameter from system |  
  
**Returns:**  
  
* (_Object_) qnode

**Examples:**

```js
var MqttNode = require('mqtt-node');
var qnode = new MqttNode('my_foo_client_id', {
    lifetime: 21600,
    ip: '192.168.0.99',
    mac: '00:0c:29:3e:1b:d2',
    version: 'v0.0.6'
});
    
console.log(qnode.clientId);    // 'my_foo_client_id'
console.log(qnode.lifetime);    // 21600
console.log(qnode.ip);          // '192.168.0.99'
console.log(qnode.mac);         // '00:0c:29:3e:1b:d2'
console.log(qnode.version);     // 'v0.0.6'

// Do not change the device attributes with direct assigments, 
// i.e., qnode.lifetime = 2000.

// Use qnode.setDevAttrs() to change attributes, and qnode will 
// automatically check if it needs to publish an update message to the Server.
```
  
********************************************
<a name="API_initResrc"></a>
### .initResrc(oid, iid, resrcs)
Initialize the Resources on qnode.  

**Arguments:**  

1. `oid` (_String | Number_): Id of the Object that owns the Resources.  
    `oid` can be an IPSO-defined or LWM2M-defined identifiers in string or in number. Please refer to the [lwm2m-id](https://github.com/simenkid/lwm2m-id#5-table-of-identifiers) for all pre-defined ids. If `oid` is not a pre-defined identifer, LWMQN will take it as a private one.  

2. `iid` (_String | Number_): Id of the Object Instance that owns the Resource.  
    It is common to use numbers to enumerate Object Instances, but using a string for the `iid` is also accepted, e.g., `12`, `'12'` and `'my_instance01'` are all valid.  

3. `resrcs` (_Object_): An object with **rid-value** pairs to describe the Resources.  
    Each key is a `rid` and each value is the corresponding value of the Resource. Resource value can be a primitive, an data object, or an object with specific methods, i.e. `read()`, `write()`, `exec()`. Please refer to section [Resources Planning](#Resources) for more details of Resource initialization.  

  
**Returns:**  
  
* (_Object_): qnode

**Examples:**  

* Resource is a simple value:  
  
```js
// use oid and rids in string
qnode.initResrc('humidity', 0, {
    sensorValue: 20,
    units: 'percent'
});

// use oid and rids in number
qnode.initResrc(3304, 0, {
    5700: 20,
    5701: 'percent'
});

// using string-numbers is ok too
qnode.initResrc('3304', 0, {
    '5700': 20,
    '5701': 'percent'
});
```
  
* Resource value is got from particular operations:  
  
```js
// reading sensed value from an analog interface
qnode.initResrc('mySensor', 0, {
    sensorValue: {
        read: function (cb) {
            // assume readSensor() is an asynchronous function or a callback-style function
            readSensor('aio0', function (val) {
                cb(null, val);
            });
        }
        // if write method is not given, this Resource will be considered as unwritable
    }
});

qnode.initResrc('mySensor', 0, {
    sensorValue: {
        read: function (cb) {
            // if the callback of readSensor() is also in err-first style
            readSensor('aio0', cb);
        }
    }
});

qnode.initResrc('mySensor', 0, {
    sensorValue: {
        read: function (cb) {
            // assume readSensor() is a synchronous function
            try {
                var val = readSensor('aio0');
                cb(null, val);
            } catch (err) {
                cb(err);
            }
        }
    }
});
```
  
* Resource value needs to be written through particular operations:  
  
```js
// writing a value to a digital interface
qnode.initResrc('mySwitch', 0, {
    onOff: {
        // if read method is not given, this Resource will be considered as unreadable
        read: function (cb) {
            // do the read procedure
        },
        write: function (val, cb) {
            gpio.write('gpio06', val);

            var currentVal = gpio.read('gpio06');
            cb(null, currentVal);
        }
    }
});
```
  
* Resource is executable (a procedure on the Client Device that can be remotely called):  
  
```js    
qnode.initResrc('myLight', 0, {
    blink: {
        exec: function (t, cb) {
            blinkLed('led1', t);    // bink led1 for t times
            cb(204, null);          // the 2nd argument of cb is a response object
        }
    }
});

qnode.initResrc('myCounter', 0, {
    count: {
        exec: function (cb) {
            countSomething(function (err, sum) {
                // responds back the status 200(OK) and result to the Server
                cb(200, sum);
            });
        }
    }
});
```
  
********************************************
<a name="API_readResrc"></a>
### .readResrc(oid, iid, rid[, callback])
Read a value from the allocated Resource.  
  
**Arguments:**  

1. `oid` (_String | Number_): Object id  
2. `iid` (_String | Number_): Object Instance id  
3. `rid` (_String | Number_): Resource id  
4. `callback` (_Function_): An err-fisrt callback `function(err, val)` to get the read value.  

    * If the Resource is not a simple value and there has not a `read` method been initialized for it, the `val` passes to callback will be a string `_unreadable_`, e.g., you are trying to read a write-only Resource which is initialized without a read method.  
    * If the Resource is an executable Resource, the `val` passes to callback will be a string `_exec_`.  
    * If the allocating Resource is not found, an error will be passed to fisrt argument of the callback.  

**Returns:**  

* _none_

**Examples:**  
  
```js
qnode.readResrc('humidity', 0, 'sensorValue', function (err, val) {
    if (!err)
        console.log(val);   // 20
});

qnode.readResrc('humidity', 12, 'sensorValue', function (err, val) {
    if (err)
        console.log(err);   // if Resource allocation fails 
});

qnode.readResrc('mySensor', 0, 'sensorValue', function (err, val) {
    console.log(val);       // '_unreadable_', if the Resource cannot be read
});

qnode.readResrc('myLight', 0, 'blink', function (err, val) {
    console.log(val);       // '_exec_', if the Resource is executable which cannot be read from
});
```
  
********************************************
<a name="API_writeResrc"></a>
### .writeResrc(oid, iid, rid, value[, callback])
Write a value to the allocated Resource.  
  
**Arguments:**  

1. `oid` (_String | Number_): Object id  
2. `iid` (_String | Number_): Object Instance id  
3. `rid` (_String | Number_): Resource id  
3. `value` (_Depends_): The value to write to the allocated Resource.  
4. `callback` (_Function_): An err-fisrt callback `function(err, val)`, where `val` is the value been successfully written.  

    * If the Resource is not a simple value and there has not a `write` method been initialized for it, the `val` passes to callback will be a string `_unwritable_`.  
    * If the allocating Resource is not found, an error will be passed to fisrt argument of the callback.  
  
**Returns:**  

* _none_

**Examples:**  
  
```js
qnode.writeResrc('humidity', 0, 'sensorValue', 80, function (err, val) {
    console.log(val);       // '_unwritable_'
});

qnode.writeResrc('humidity', 12, 'sensorValue', 80, function (err, val) {
    if (err)
        console.log(err);   // if the Resource does not exist
});

qnode.writeResrc('mySwitch', 0, 'onOff', 1, function (err, val) {
    console.log(val);       // 1
});
```
  
********************************************
<a name="API_connect"></a>
### .connect(url[, opts])
Connect and register to a LWMQN Server with the given url. If succeeds, qnode will fire a `ready` event.  
  
**Arguments:**  

1. `url` (_String_): Url of the LWMQN Server, e.g. `mqtt://localhost`, `mqtt://192.168.0.100`, `mqtt://192.168.0.20:3000`.  
2. `opts` (_Object_): The connect options with properties given in the following table.  
  
| Property        | Type             | Default      | Description                                             |  
|-----------------|------------------|--------------|---------------------------------------------------------|  
| username        | String           | `'freebird'` | The username required by your broker, if any            |  
| password        | String \| Buffer | `'skynyrd'`  | the password required by your broker, if any            |  
| keepalive       | Number           | 10           | 10 seconds, set to 0 to disable                         |  
| reconnectPeriod | Number           | 3000         | milliseconds, interval between two reconnections        |  
| connectTimeout  | Number           | 30000        | milliseconds, time to wait before a CONNACK is received |  

  
**Returns:**  

* (_Object_): qnode

**Examples:**  
  
```js
qnode.on('ready', function () {
    // do your work here
});

// use default account
qnode.connect('mqtt://192.168.0.100');

// use your own account
qnode.connect('mqtt://192.168.0.100', {
    username: 'someone',
    password: 'somepassword'
});

// use the MQTT connection options other than defaults
qnode.connect('mqtt://192.168.0.100', {
    keepalive: 30,
    reconnectPeriod: 5000
});
```
  
********************************************
<a name="API_close"></a>
### .close([force,] [callback])
Disconnect from the Server. qnode will fire a `close` event if it is disconnected.  
  
**Arguments:**  

1. `force` (_Boolean_): `true` will close the client right away, without waiting for the in-flight messages to be acked. This parameter is optional.  
2. `callback` (_Function_): Will be called when the Client is closed.  
  
**Returns:**  

* (_Object_): qnode

**Examples:**  
  
```js
qnode.on('close', function () {
    console.log('Disconnected from the Server.');
});

qnode.close();
```
  
********************************************
<a name="API_pubRegister"></a>
### .pubRegister([callback])
Publish a registering request to the Server. Everytime you invoke connect(), qnode will do regiseter to the Server as well.  
  
**Arguments:**  

1. `callback` (_Function_): `function (err, rsp)`. An `err` occurs if qnode has no connection to a Server. `rsp` is a response object with a status code to tell the result of registration. The descriptions of possible `rsp.status` are given in the following table.  
  
| rsp.status | Status              | Description                                                                           |
|------------|---------------------|---------------------------------------------------------------------------------------|
| 200        | OK                  | The Client was registered before and the record is successfully renewed on the Server |
| 201        | Created             | Registration is successful for this new Client                                        |
| 400        | BadRequest          | Invalid paramter(s) for registration                                                  |
| 408        | Timeout             | No response from the Server in 60 secs                                                |
| 409        | Conflict            | Client Id conflicts                                                                   |
| 500        | InternalServerError | The Server has some trouble                                                           |

**Returns:**  

* (_Object_): qnode

**Examples:**  
  
```js
qnode.pubRegister(function (err, rsp) {
    console.log(rsp);  // { status: 201 }
});
```
  
********************************************
<a name="API_pubDeregister"></a>
### .pubDeregister([callback])
Publish a deregistering request to the Server for the Client to leave the network.  
  
**Arguments:**  

1. `callback` (_Function_): `function (err, rsp)` will be called when deregistering is done. An `err` occurs if qnode has no connection to a Server. `rsp` is a response object with a status code to tell the result of deregistration.  
  
| rsp.status | Status              | Description                                |
|------------|---------------------|--------------------------------------------|
| 202        | Deleted             | The Client was successfully deregistered   |
| 404        | NotFound            | The Client is not found on the Server      |
| 408        | Timeout             | No response from the Server in 60 secs     |
| 500        | InternalServerError | The Server has some trouble                |

**Returns:**  

* (_Object_) qnode

**Examples:**  
  
```js
qnode.pubDeregister(function (err, rsp) {
    console.log(rsp);  // { status: 202 }
});
```
  
********************************************
<a name="API_setDevAttrs"></a>
### .setDevAttrs(devAttrs[, callback])
Set device attribues on the qnode.  

**Arguments:**
  
1. `devAttrs` (_Object_): Device attributes.  
    It is just like the `devAttrs` in the arguments of MqttNode constructor, but any change of `clientId` and `mac` is not allowed. If you want to change either `clientId` or `mac`, please deregister qnode from the Server and then re-register to it again. Any change of the device attributes will be published with an update message to the Server.  
2. `callback` (_Function_): `function (err, rsp)` will be called when updating procedure is done. An `err` occurs if qnode has no connection to a Server. `rsp` is a response object with a status code to tell the result of device attribues updating.  

| rsp.status | Status Code         | Description                                                                        |
|------------|---------------------|------------------------------------------------------------------------------------|
| 204        | Changed             | The Server successfuly accepted this update message                                |
| 400        | BadRequest          | There is an unrecognized attribute in the update message                           |
| 405        | MethodNotAllowed    | If you are trying to change either `clientId` or `mac`, you will get this response |
| 408        | Timeout             | No response from the Server in 60 secs                                             |
| 500        | InternalServerError | The Server has some trouble                                                        |

**Returns:**  

* (_Object_): qnode

**Examples:**  
  
```js
// this will set the ip on qnode and mqtt-node will publish the update of ip to the Server
qnode.setDevAttrs({
    ip: '192.168.0.211'
}, function (err, rsp) {
    console.log(rsp);   // { status: 204 }
});
```
  
********************************************
<a name="API_pubNotify"></a>
### .pubNotify(note[, callback])
Publish a notificatoin to the Server. The message `note` should be a well-formatted data object.  

* Notice that **mqtt-node** will automatically report notifications to the Server if the Client is **observed** by the Server. Therefore, use this API when you do have to notify something to the Server aggressively in your application.  
* If you like to publish a Resource, `note` should be an object with fields of `oid`, `iid`, `rid` and `data`, where `data` is the Resource value.  
* If you like to publish an Object Instance, `note` should be an object with fields of `oid`, `iid` and `data` fields, where `data` is the Object Instance containing all its Resources. Please refer to [LWMQN Notify Channel](#LWMQN_PAGE) for more info.  

**Arguments:**  

1. `note` (_Object_): A Resource or an Object Instance you like to report to the Server.  
2. `callback` (_Function_): `function (err, rsp)` will be called when the acknowledgement is coming back from the Server.  
  
| rsp.status | Status              | Description                                                  |
|------------|---------------------|--------------------------------------------------------------|
| 204        | Changed             | The Server has got the notification                          |
| 400        | BadRequest          | Invalid parameters, e.g., oid or iid is not given            |
| 404        | NotFound            | The notified Object Instance or Resource cannot be allocated |
| 500        | InternalServerError | The Server has some trouble                                  |

**Returns:**  

* (_Object_) qnode

**Examples:**  
  
```js
// pub a Resource
qnode.pubNotify({
    oid: 'humidity',
    iid: 0,
    rid: 'sensorValue',
    data: 32
}, function (err, rsp) {
    console.log(rsp);   // { status: 204 }
});

// pub an Object Instance
qnode.pubNotify({
    oid: 'humidity',
    iid: 0,
    data: {
        sensorValue: 32,
        units: 'percent'
    }
}, function (err, rsp) {
    console.log(rsp);   // { status: 204 }
});

// pub something that the Server cannot recognize
qnode.pubNotify({
    oid: 'foo',
    iid: 0,
    rid: 'bar',
    data: 200
}, function (err, rsp) {
    console.log(rsp);   // { status: 404 }, 404 NotFound
});

// pub something with invalid format
qnode.pubNotify('Hello World', function (err, rsp) {
    console.log(rsp);   // { status: 400 }, 400 BadRequest
});
```
  
********************************************
<a name="API_pingServer"></a>
### .pingServer([callback])
Ping the Server.  
  
**Arguments:**  

1. `callback` (_Function_): `function (err, rsp)` will be called upon receiving the response. An `err` occurs if qnode has no connection to the Server. `rsp` is a response object with a status code to tell the result of pinging. `rsp.data` is the approximate round trip time in milliseconds.  
  
| rsp.status | Status              | Description                                                     |
|------------|---------------------|-----------------------------------------------------------------|
| 200        | OK                  | Pinging is successful with `rsp.data` roundtrip time in ms      |
| 408        | Timeout             | No response from the Server in 60 secs. `rsp.data` will be null |

**Returns:**  

* (_Object_) qnode

**Examples:**  
  
```js
qnode.pingServer(function (err, rsp) {
    console.log(rsp);   // { status: 200, data: 16 }, 16ms
});
```
  
********************************************
<a name="API_publish"></a>
### .publish(topic, message[, options][, callback])
This is a generic method to publish a message to a topic.  
  
If you are using **mqtt-shepherd** as the LWMQN Server, it accepts a registered Client to publish any message to any topic. In this case, the Server simply acts as an MQTT broker. The publishment is not authorized at the Server if the Client was not successfully registered.  
  
**Arguments:**  

1. `topic` (_String_): Topic to publish to.  
2. `message` (_String | Buffer_): Message to publish.  
3. `options` (_Object_): Option to publish with, including the properties shown in the following table.  
4. `callback` (_Function_): Will be called when the QoS handling completes, or at the next tick if QoS 0.  
  
| Property | Type    | Default | Description |
|----------|---------|---------|-------------|
| `qos`    | Number  | 0       | QoS level   |
| `retain` | Boolean | false   | Retain flag |
  
**Returns:**  

* (_Object_) qnode

**Examples:**  
  
```js
qnode.publish('foo/bar/greet', 'Hello World!');
```
  
********************************************
<a name="API_subscribe"></a>
### .subscribe(topics[, options][, callback])
This is a generic method to subscribe to a topic or topics listed in an array.  
  
If you are using **mqtt-shepherd** as the LWMQN Server, it accepts the registered Client to subscribe to any topic. In this case, the Server simply acts as an MQTT broker. The generic subscription is not authorized at the Server if the Client was not successfully registered.  
  
**Arguments:**  

1. `topics` (_String_ | _String[]_): The topic(s) to subscribe to.  
2. `options` (_Object_): Option to subscribe with, including the property `qos` which is a Qos level of the subscription. `qos` is 0 by default.  
3. `callback` (_Function_): `function (err, granted)` callback will be called on suback, where `err` is a subscrtiption error and `granted` is an array of objects formatted in `{ topic, qos }`  
  
**Returns:**  

* (_Object_) qnode

**Examples:**  
  
```js
qnode.subscribe('foo/bar/score', function (err, granted) {
    console.log(granted);   // [ { topic: 'foo/bar/score', qos: 0 } ]
});
```
  
********************************************
<a name="API_unsubscribe"></a>
### .unsubscribe(topics[, callback])
This is a generic method to unsubscribe from a topic or topics.  

If you are using **mqtt-shepherd** as the LWMQN Server, the generic unsubscription is not authorized at the Server if the Client was not successfully registered.  
  
**Arguments:**  

1. `topic` (_String_|_String[]_): Topic(s) to unsubscribe from.  
2. `callback` (_Function_): Callback will be fired on unsuback  
  
**Returns:**  

* (_Object_) qnode

**Examples:**  
  
```js
qnode.unsubscribe('foo/bar/score');
```
  
********************************************

<br />

<a name="Templates"></a>
## 7. Code Templates

[Here is the document](https://github.com/lwmqn/mqtt-node/blob/master/docs/templates.md) that provides you with many code templates of IPSO-defined devices. Each template gives the code snippet of how to initialize an Object Instance with its oid and iid, and lists every Resource the Object Instance may have.  

The following example shows how to create an **digital input** Object Instance. In the code snippet, commented lines are optional Resources. A phrase `< rid = 5500, R, Boolean >` tells the access permission and data type of a Resource.  
  
```js
// Create an Object Instance: Digital Input (oid = 3200 or 'dIn')

qnode.initResrc('dIn', 0, {
    dInState: {                     // < rid = 5500, R, Boolean >
        read: function (cb) {}
    },
    // counter: ,                   // < rid = 5501,  R, Integer >
    // dInPolarity: ,               // < rid = 5502, RW, Boolean >
    // debouncePeriod: ,            // < rid = 5503, RW, Integer, ms >
    // edgeSelection: ,             // < rid = 5504, RW, Integer { 1: fall, 2: rise, 3: both } >
    // counterReset: ,              // < rid = 5505,  E, Opaque >
    // appType: ,                   // < rid = 5750, RW, String >
    // sensorType:                  // < rid = 5751,  R, String >
});
```

