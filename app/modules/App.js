import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavLink from '../components/NavLink'
import Footer from '../components/Footer'

var css = require('../styles/main.css'),
    transBgColor = {
        grad: "linear-gradient(to left, #614385 , #516395)"
    };

var App = React.createClass({
    render: function () {
        var banner;

            banner = (
               <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                  <Row top="md" style={{ height: "12rem", background: transBgColor.grad}}>
                    <Col style={{ margin: "auto", textAlign: "center", fontSize: "14px", color: "rgba(254, 254, 254, 0.8)" }} xs={24} md={12}>
                        <h1>Lightweight MQTT Machine Network</h1>
                        <p>The dddd forsssssasdas yyyy and you....</p>
                        <div>
                            <a href="https://github.com/lwmqn/mqtt-shepherd" target="_blank" className={css["btn"]}>Machine Server</a>
                            <a href="https://github.com/lwmqn/mqtt-node" target="_blank" className={css["btn"]}>Machine Node</a>
                        </div>
                    </Col>
                  </Row>
                </ReactCSSTransitionGroup>
            );

        return (
            <Grid fluid>
                {banner}
                {this.props.children}
            <footer>
                <Row style={{marginTop: "8rem" }} />

                <Row style={{backgroundColor: "#555", paddingButtom: "10px" }}>
                        <Col xs={2} md={1}></Col>
                        <Col xs={20} md={10}>
                            <Footer />
                        </Col>
                        <Col xs={2} md={1}></Col>
                </Row>

            </footer>
            </Grid>
        );
    }
});

module.exports = App;
