<a name="Installation"></a>
## 3. Installation

> $ npm install mqtt-node --save
  
<a name="Basic"></a>
## 4. Basic Usage

* Client-side exmaple (here is how you use `mqtt-node` on a machine node):  

```js
var MqttNode = require('mqtt-node');

/********************************************/
/*** Client Device Initialzation          ***/
/********************************************/
var qnode = new MqttNode('my_foo_client_id');

// Initialize Resources that follow IPSO definition

// We have two humidity sensors here
// oid = 'humidity', iid = 0
qnode.initResrc('humidity', 0, {
    sensorValue: 20,
    units: 'percent'
});

// oid = 'humidity', iid = 1
qnode.initResrc('humidity', 1, {
    sensorValue: 16,
    units: 'percent'
});

// Initialize a custom Resource
qnode.initResrc('myObject', 0, {
    myResrc1: 20,
    myResrc2: 'hello world!'
});

qnode.on('ready', function () {
    // If the registration procedure completes successfully, 'ready' will be fired

    // start to run your application after registration
});

// Connect and register to a Server with the default account of mqtt-shepherd
qnode.connect('mqtt://192.168.0.2', {
    username: 'freebird',
    password: 'skynyrd'
});
```

* Server-side example (please go to [mqtt-shepherd](https://github.com/simenkid/mqtt-shepherd) document for details):  

```js
var qnode = qserver.findNode('my_foo_client_id');

if (qnode) {
    qnode.readReq('humidity/0/sensorValue', function (err, rsp) {
        console.log(rsp.data);      // 20
    });

    qnode.readReq('myObject/0/myResrc2', function (err, rsp) {
        console.log(rsp.data);      // 'hello world!'
    });
}
```
