import React from 'react';
import NavLink from '../components/NavLink'

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ListNested from '../components/ListNested'
import Content from '../components/Content'

import nodeIntroRawMd from '../docs/node/01_intro.md';
import nodeUsageRawMd from '../docs/node/02_usage.md';
import nodeResourcesRawMd from '../docs/node/03_resources.md';
import nodeApisRawMd from '../docs/node/04_apis.md';
import nodeTempRawMd from '../docs/node/05_templates.md';

//   titles: [ { name, link }, ... ]
//   apis: [ { name, anchor }, ... ]
var titles = [ { name: 'Overview', link: '#'}, { name: 'Usage', link: '#'}, { name: 'Plan Resources', link: '#'} ];
var apis = [
    { name: 'MqttNode()', anchor: '#'}, { name: 'setDevAttrs()', anchor: '#'}, { name: 'initResrc()', anchor: '#'},
    { name: 'readResrc()', anchor: '#'}, { name: 'writeResrc()', anchor: '#'}, { name: 'connect()', anchor: '#'},
    { name: 'close()', anchor: '#'}, { name: 'pubRegister()', anchor: '#'}, { name: 'pubDeregister()', anchor: '#'},
    { name: 'pubNotify()', anchor: '#'}, { name: 'pingServer()', anchor: '#'}, { name: 'publish()', anchor: '#'},
    { name: 'subscribe()', anchor: '#'}, { name: 'unsubscribe()', anchor: '#'}
];

var Node = React.createClass({
    getInitialState: function () {
        return {
            rawMd: nodeIntroRawMd
        }
    },
    render: function () {
        return (
            <Row style={{marginTop: "20px"}}>
                <Col style={{ borderRight: "thin solid #CCCCCC" }} xs={4} md={2}>
                    <ListNested titles={titles} apis={apis} />
                </Col>
                <Col style={{paddingLeft: "20px" }} xs={20} md={10}>
                    <Content rawMd={this.state.rawMd} />
                </Col>
            </Row>
        );
    }
});

module.exports = Node;
