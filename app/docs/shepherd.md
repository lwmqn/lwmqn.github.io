
* To create a LWMQN server with mqtt-shepherd:  
  
    ```js
    var MqttShepherd = require('mqtt-shepherd');
    var qserver = new MqttShepherd();   // create a LWMQN server

    qserver.on('ready', function () {
        console.log('Server is ready.');
        qserver.permitJoin(180);        // allow devices to join the network within 180 secs
    });

    qserver.start(function (err) {      // start the sever
        if (err)
            console.log(err);
    });
      
    // That's all to start a LWMQN Server.
    // Now the Server is going to auotmatically tackle most of the network managing things.
```
  
* Find a remote machine node managed by the server, and take some action to it:  
  
    ```js
    var qnode = qserver.find('my_foo_client_id');

    if (qnode) {
        qnode.readReq('humidity/0/sensorValue', function (err, rsp) {
            console.log(rsp.data);      // 20
        });

        qnode.readReq('myObject/0/myResrc2', function (err, rsp) {
            console.log(rsp.data);      // 'hello world!'
        });
    }
    ```
  