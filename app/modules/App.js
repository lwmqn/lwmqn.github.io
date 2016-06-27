import React from 'react';
import { Link } from 'react-router'
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavLink from '../components/NavLink'

var css = require('../styles/main.css'),
    transBgColor = {
        grad: "linear-gradient(to left, #614385 , #516395)"
    };

var App = React.createClass({
    render: function () {
            console.log(css);
        return (
            <Grid fluid>
                <Row style={{backgroundColor: "#555", paddingTop: "10px" }}>
                    <Col xs={2} md={1}></Col>
                    <Col xs={20} md={10}>
                        <ul role="nav" className={css['main-nav']} >
                            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                            <li><NavLink to="/shepherd">MQTT Shepherd</NavLink></li>
                            <li><NavLink to="/node">MQTT Node</NavLink></li>
                        </ul>
                    </Col>
                    <Col xs={2} md={1}></Col>
                </Row>
                {
                    this.props.location.pathname === "/" ?
                        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                          <Row style={{ height: "12rem", background: transBgColor.grad}}>
                            <Col style={{ margin: "auto", textAlign: "center", fontSize: "14px", color: "rgba(254, 254, 254, 0.8)" }} xs={24} md={12}>
                                <h1>Lightweight MQTT Machine Network</h1>
                                <p>The xxxx for yyyy and you....</p>
                                <div>
                                    <NavLink to="/shepherd" className={css["btn"]} >Machine Server</NavLink>
                                    <NavLink to="/node" className={css["btn"]} >Machine Node</NavLink>
                                </div>
                            </Col>
                          </Row>
                        </ReactCSSTransitionGroup>
                    :null
                }
                {this.props.children}
            </Grid>
        );
    }
});

module.exports = App;
