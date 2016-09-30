import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';

var MarkdownElement = require('../components/MarkdownElement');
var Home = require('./Home');
var nodeMd = require('../docs/node.md');
var shepherdMd = require('../docs/shepherd.md');

var css = require('../styles/main.css'),
    transBgColor = {
        grad: "linear-gradient(to left, #614385 , #516395)"
    };

const iconStyles = {
  marginRight: 24,
};


var App = React.createClass({
    render: function () {
        var banner;

            banner = (
               <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                  <Row top="md" style={{ height: "14rem", background: transBgColor.grad}}>
                    <Col style={{ margin: "auto", textAlign: "center", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }} xs={24} md={12}>

                        <h1 style={{ letterSpacing: "1px"}}>Lightweight MQTT Machine Network</h1>
                        <p style={{fontStyle: "italic", fontSize: "120%"}}>Build your machine network with MQTT, IPSO, LWM2M, and Node.js</p>

                        <div style={{marginTop: "2rem"}}>
                            <a href="#Shepherd" className={css["btn"]}>Create Your Machine Server</a>
                            <a href="#Node" className={css["btn"]}>Design Your Machine Nodes</a>
                        </div>

                    </Col>
                  </Row>
                </ReactCSSTransitionGroup>
            );

        return (
            <Grid fluid>
                {banner}
                <Home />
                <div style={{margin: "2rem 0"}}></div>
                <div style={{textAlign: "center"}}>
                    <div style={{margin: "0 auto"}}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AF_zcmEePHc" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div style={{margin: "2rem 0"}}></div>
                <Divider id="Shepherd" />
                <div style={{margin: "2rem 0"}}></div>

                <h2 style={{display: "inline"}}>MQTT-Shepherd</h2>
                <div style={{display: "inline"}}>
                    <IconButton href="https://github.com/lwmqn/mqtt-shepherd" target="_blank" iconClassName="muidocs-icon-custom-github" linkButton={true} />
                </div>
                    <MarkdownElement text={shepherdMd}/>

                <div style={{margin: "2rem 0"}}></div>
                <Divider id="Node" />
                <div style={{margin: "2rem 0"}}></div>

                <h2 style={{display: "inline"}}>MQTT-Node</h2>
                <div style={{display: "inline"}}>
                    <IconButton href="https://github.com/lwmqn/mqtt-node" target="_blank" iconClassName="muidocs-icon-custom-github" linkButton={true} />
                </div>
                    <MarkdownElement text={nodeMd}/>


            <footer>
                <Row style={{marginTop: "8rem" }} />

                <Row style={{backgroundColor: "#999", paddingButtom: "10px" }}>
                        <Col xs={2} md={1}></Col>
                        <Col xs={20} md={10}>
                            <div style={{color: "#FFF", fontSize:"60%", textAlign: "center", padding: "0.4rem 0"}}>
                                Copyright © 2016 LWMQN project, sivann, and other lwmqn.github.io contributors
                            </div>
                        </Col>
                        <Col xs={2} md={1}></Col>
                </Row>

            </footer>
            </Grid>
        );
    }
});

module.exports = App;
