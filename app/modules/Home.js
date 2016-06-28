import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import IPSOIcon from 'material-ui/svg-icons/hardware/developer-board';
import LWM2MIcon from 'material-ui/svg-icons/hardware/device-hub';
import MQTTIcon from 'material-ui/svg-icons/device/wifi-tethering';
import NodejsIcon from 'material-ui/svg-icons/action/polymer';
import {indigo100, lightGreen500, cyan500, purple800, green700} from 'material-ui/styles/colors';


const iconStyles = {
  marginRight: "24px",
    width: "20%",
    height: "auto",
    marginBottom: "0px",
};

const iconStyles2 = {
  marginRight: "24px",
    width: "20%",
    height: "auto",
    marginBottom: "0px",
    transform: "rotate(90deg)"
};

var hrefStyle = {
    color: cyan500,
    textDecoration: "none"
};

var hrefStyle2 = {
    color: lightGreen500,
    textDecoration: "none"
};

var css = require('../styles/main.css');

var Home = React.createClass({
    render: function () {
        return (
            <Grid fluid>
                <Row>
                    <Col className={css.box} xs={6} md={3}>
                        <MQTTIcon style={iconStyles} color={purple800} />
                        <h3>MQTT</h3>
                        <p>
                            LWMQN is an application layer protocol on top of <a href="http://mqtt.org/" target="_blank" style={hrefStyle2}>MQTT</a>. 
                            This project provides the server-side <span style={{fontWeight: "bold"}}>mqtt-shepherd</span> and 
                            the client-side <span style={{fontWeight: "bold"}}>mqtt-node</span> libraries for developers to quickly 
                            build their machine network. These libraries are based on M. Collina's <a href="https://github.com/mcollina/mosca" target="_blank" style={hrefStyle}>Mosca</a> and <a href="https://github.com/mqttjs/MQTT.js" target="_blank" style={hrefStyle}>MQTT.js</a>.
                        </p>

                    </Col>
                    <Col className={css.box} xs={6} md={3}>
                       <IPSOIcon style={iconStyles} color={lightGreen500}/>
                        <h3>IPSO</h3>
                        <p>
                            LWMQN benefits from <a href="http://www.ipso-alliance.org/" target="_blank" style={hrefStyle2}>IPSO</a> data model, which leads to a very comprehensive way for the Client machine to organize resources and for the Server to use a path with URI-style to allocate and query resources on remote devices.
                            Many <a href="https://github.com/lwmqn/mqtt-node#Templates" target="_blank" style={hrefStyle}>code templates</a> for common devices, i.e., temperature sensor, humidity sensor, light control, are also provided by <span style={{fontWeight: "bold"}}>mqtt-node</span>.
                        </p>
                    </Col>
                    <Col className={css.box} xs={6} md={3}>
                        <LWM2MIcon style={iconStyles} color={cyan500} />
                        <h3>LWM2M</h3>
                        <p>
                            For IoT applications, establishing communication among machines is easy, but adequately managing them may be not. 
                            LWMQN follows part of <a href="http://technical.openmobilealliance.org/Technical/technical-information/release-program/current-releases/oma-lightweightm2m-v1-0" target="_blank" style={hrefStyle2}>OMA LWM2M v1.0 specification</a> to 
                            meet the minimum requirements of machine network management, e.g. device joining permission, resources reading, writing, observing and executing. Good management leads to good applications. 
                        </p>
                    </Col>

                    <Col className={css.box} xs={6} md={3}>
                        <NodejsIcon style={iconStyles2} color={green700} />
                        <h3>Node.js</h3>
                        <p>
                            LWMQN offers JS developers server-side and client-side node.js libraries. They are suitable for devices that can run <a href="https://nodejs.org/en/" target="_blank" style={hrefStyle2}>node.js</a>, such as Linkit Smart 7688, Raspberry Pi, Beaglebone Black, Edison, and many more. 
                            Thanks to the power of node.js, building your own IoT webapp is fast and easy, and making your own RESTful APIs to interact with your machines is also possible. 
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Home;
