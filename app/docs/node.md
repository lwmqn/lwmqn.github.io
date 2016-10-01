
* How to create a mqtt-node on your machine:  
  
    ```js
    var MqttNode = require('mqtt-node'),
        SmartObject = require('smartobject');

    /********************************************/
    /*** Client Device Initialzation          ***/
    /********************************************/
    var so = new SmartObject();

    // Humidity sensor - the first instance
    so.init('humidity', 0, {    // oid = 'humidity', iid = 0
        sensorValue: 20,
        units: 'percent'
    });

    // Humidity sensor - the second instance
    so.init('humidity', 1, {    // oid = 'humidity', iid = 1
        sensorValue: 16,
        units: 'percent'
    });

    // A custom Object with two Resources: myResrc1 and myResrc2
    so.init('myObject', 0, {    // oid = 'myObject', iid = 0
        myResrc1: 20,
        myResrc2: 'hello world!'
    });

    qnode.on('ready', function () {
        // You can start to run your local app, such as showing the sensed value on an OLED monitor.
        // To interact with your Resources, simply use the handy APIs provided by SmartObject class.
    });

    qnode.on('registered', function () {
        // Your qnode is now in the netwrok. This event only fires at the first time of qnode registered to the Server.
    });

    qnode.on('login', function () {
        // Your qnode is now ready to accept remote requests from the Server. Don't worry about the 
        // REQ/RSP things, qnode itself will handle them for you.  
    });

    // Connect and register to a Sever, that's it!
    qnode.connect('mqtt://192.168.0.2');
    ```
  
* Here is a quick example to show a resource value reading from a gpio. Please see [Smart Object Resources Planning Tutorial](https://github.com/PeterEB/smartobject/blob/master/docs/resource_plan.md) for more details.  
  
    ```js
    so.init('temperature', 0, {
        sensorValue: {
            read: function (cb) {
                var analogVal = analogPin0.read();
                cb(null, analogVal);
            }
        },
        units: 'cel'
    });
    ```
  