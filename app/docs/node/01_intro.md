<a name="Overiew"></a>
## Overview

Lightweight MQTT machine network [**LWMQN**](http://lwmqn.github.io) is an architecture that follows part of [**OMA LWM2M v1.0**](http://technical.openmobilealliance.org/Technical/technical-information/release-program/current-releases/oma-lightweightm2m-v1-0) specification to meet the minimum requirements of machine network management.  

* This module, **mqtt-node**, is an implementation of LWMQN Client.  
* [**mqtt-shepherd**](https://github.com/simenkid/mqtt-shepherd) is an implementation of LWMQN Server.  
* **mqtt-shepherd** and **mqtt-node** are working together to form an IoT machine network.  
* **mqtt-node** is suitable for devices that can run node.js, such as [Linkit Smart 7688](http://home.labs.mediatek.com/hello7688/), [Raspberry Pi](https://www.raspberrypi.org/), [Beaglebone Black](http://beagleboard.org/BLACK), [Edison](http://www.intel.com/content/www/us/en/do-it-yourself/edison.html), and many more.  
* **mqtt-node** uses IPSO definitions as its fundamental of resource organizing on devices. This document also provides [templates](https://github.com/lwmqn/mqtt-node/blob/master/docs/templates.md) of many common devices defined by IPSO [**Smart Objects starter pack 1.0**](http://www.ipso-alliance.org/smart-object-guidelines/), i.e., temperature sensor, humidity sensor, light control.  
* **mqtt-node** is trying to let you build IoT peripheral machines with less pain.  

**Note**:  
* IPSO uses **_Object_**, **_Object Instance_** and **_Resource_** to describe the hierarchical structure of resources on a Client Device, where oid, iid, and rid are identifiers of them respectively to allocate resources on a Client Device.  
* An IPSO **_Object_** is like a Class, and an **_Object Instance_** is an entity of such Class. For example, when you have many 'temperature' sensors, you have to use an iid on each Object Instance to distinguish one entity from the other.  

<br />

#### Acronyms and Abbreviations
* **Server**: LWMQN server
* **Client** or **Client Device**: LWMQN client which is a machine node in an IoT network
* **MqttNode**: class exposed by `require('mqtt-node')`  
* **qnode**: instance of MqttNode class  
* **oid**: identifier of an Object  
* **iid**: identifier of an Object Instance  
* **rid**: indetifier of a Resource  

<a name="Features"></a>
## Features

* Communication based on MQTT protocol and library [**mqtt.js**](https://www.npmjs.com/package/mqtt)  
* Resources structured in a hierarchical Smart-Object-style (IPSO)  
* Easy to create Resources on a Client Device  
* LWM2M-like interfaces for Client/Server interaction  
  
<a name="Installation"></a>
## Installation

> $ npm install mqtt-node --save
 