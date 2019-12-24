<template>
  <div>
    <section class="hero  is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" style="letter-spacing: 1px;">Lightweight Message Queuing Network - LwMQN</h1>
          <h2 class="subtitle" style="font-style: italic; font-size: 120%;padding-top:10px;">Build your IoT device network with MQTT, IPSO Smart Objects, LWM2M-like communication protocol and Node.js</h2>
        </div>
      </div>
    </section>
    <div class="container" style="padding-top: 40px;">
      <div class="columns">
        <div class="column">
          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(106, 27, 154); height: auto; width: 20%; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; margin-right: 24px; margin-bottom: 0px;">
            <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"></path>
          </svg>
          <h3 style="font-weight:bold;">MQTT</h3>
          <p>LwMQN is an application layer protocol on top of <a href="http://mqtt.org/" target="_blank" style="color: rgb(139, 195, 74); text-decoration: none;">MQTT</a>. This project provides the server-side <span style="font-weight: bold;">@lwmqn/shepherd</span> and the client-side <span style="font-weight: bold;">@lwmqn/qnode</span> libraries for developers to quickly build their machine network.</p>
        </div>
        <div class="column">
          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(139, 195, 74); height: auto; width: 20%; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; margin-right: 24px; margin-bottom: 0px;">
            <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></path>
          </svg>
          <h3 style="font-weight:bold;">IPSO</h3>
          <p>LwMQN benefits from <a href="http://www.ipso-alliance.org/" target="_blank" style="color: rgb(139, 195, 74); text-decoration: none;">IPSO</a> data model, which leads to a very comprehensive way for the Client machine to organize resources and for the Server to use a path with URI-style to allocate and query resources on remote devices. Many <a href="https://github.com/lwmqn/smartobject/blob/master/docs/templates.md" target="_blank" style="color: rgb(0, 188, 212); text-decoration: none;">code templates</a> for common devices, i.e., temperature sensor, humidity sensor, light control, are also provided by <span style="font-weight: bold;">@lwmqn/smartobject</span> module.</p> Learn more about IPSO Smart Objects at <a href="https://www.omaspecworks.org/develop-with-oma-specworks/ipso-smart-objects/">OMA SpecWorks IPSO Web page</a>
        </div>
        <div class="column">
          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: auto; width: 20%; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; margin-right: 24px; margin-bottom: 0px;">
            <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"></path>
          </svg>
          <h3 style="font-weight:bold;">OMA SpecWorks</h3>
          <p>For IoT applications, establishing communication among machines is easy, but adequately managing them may be not. LWMQN follows part of <a href="http://openmobilealliance.org/release/LightweightM2M/" target="_blank" style="color: rgb(139, 195, 74); text-decoration: none;">OMA LightweightM2M specifications</a> to meet the minimum requirements of machine network management, e.g. device joining permission, resources reading, writing, observing and executing. Good management leads to good applications.</p>
        </div>
        <div class="column">
          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(56, 142, 60); height: auto; width: 20%; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; margin-right: 24px; margin-bottom: 0px; transform: rotate(90deg);">
            <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path>
          </svg>
          <h3 style="font-weight:bold;">Node.js</h3>
          <p>LwMQN offers JS developers server-side and client-side node.js libraries. They are suitable for devices that can run <a href="https://nodejs.org/en/" target="_blank" style="color: rgb(139, 195, 74); text-decoration: none;">Node.js</a>, such as Linkit Smart 7688, Raspberry Pi, Beaglebone Black, Edison, and many more. Thanks to the power of Node.js, building your own IoT webapp is fast and easy, and making your own RESTful APIs to interact with your machines is also possible.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h3 style="font-weight:bold;">How to create a <strong>@lwmqn/shepherd</strong></h3>
      <br>
<pre v-highlightjs><code class="javascript" style="text-align:left;background:transparent;">
const Shepherd = require('@lwmqn/shepherd')
const qserver = new Shepherd()   // create a LwMQN server

qserver.on('ready', function () {
  console.log('Server is ready.')
  qserver.permitJoin(180);        // allow devices to join the network within 180 secs
})

qserver.start(function (err) {    // start the server
  if (err)  console.log(err)

  // That's all to start a LwMQN Server.
  // Now the Server is going to auotmatically tackle most of the network managing things

  // For example find a remote device node managed by the server and take some action to it:
  const qnode = qserver.find('my_foo_client_id')

  if (qnode) {
    qnode.readReq('humidity/0/sensorValue', function (err, rsp) {
      console.log(rsp.data)     // 20
    })

    qnode.readReq('myObject/0/myResrc2', function (err, rsp) {
      console.log(rsp.data)     // 'hello world!'
    })
  }
})


    </code></pre>

      <br>
      <h3 style="font-weight:bold;">How to create a <strong>@lwmqn/qnode</strong></h3>
      <br>
      Please see <a target="_blank" href="https://github.com/lwmqn/smartobject/blob/master/docs/resource_plan.md">Smart Object Resources Planning Tutorial</a> for more details
      <br>

      <pre v-highlightjs><code class="javascript" style="text-align:left;background:transparent;">
const Qnode = require('@lwmqn/qnode')
const SmartObject = require('@lwmqn/smartobject')

// Create smart objects set
const so = new SmartObject();

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

// Example how to show a resource value reading from a gpio
// You can use this pattern to abstract hardware functionality exported by johnny-five, mraa, firmata, bonescript, etc.
so.init('temperature', 0, {
  sensorValue: {
    read: function (cb) {
      var analogVal = analogPin0.read();
      cb(null, analogVal);
    }
  },
  units: 'cel'
});

// Initialize the device with this smart objects set
const qnode = new MqttNode('my_foo_client_id', so);

qnode.on('ready', function () {
  // You can start to run your local app, such as showing the sensed value on an OLED monitor
  // To interact with your Resources, simply use the handy APIs provided by SmartObject class
});

qnode.on('registered', function () {
  // Your qnode is now in the network. This event only fires at the first time of qnode registered to the server
});

qnode.on('login', function () {
  // Your qnode is now ready to accept remote requests from the Server. Don't worry about the
  // REQ/RSP things, qnode itself will handle them for you.
});

qnode.connect('mqtt://192.168.0.2');
// Now the server is going to automatically tackle most of the network managing things
    </code></pre>
    <br><br>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
