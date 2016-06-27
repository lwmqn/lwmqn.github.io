import React from 'react';
import NavLink from '../components/NavLink'

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ListNested from '../components/ListNested'

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
    render: function () {
        return (
            <Row style={{marginTop: "20px"}}>
                <Col style={{ borderRight: "thin solid #CCCCCC" }} xs={4} md={2}>
                    <ListNested titles={titles} apis={apis} />
                </Col>
                <Col style={{paddingLeft: "20px" }} xs={20} md={10}>
                    <div>
                        This is MQTT Node page
                        <li><NavLink to="/repos/rectjs/react-router">React Router</NavLink></li>
                        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    </div>
                </Col>
            </Row>
        );
    }
});

module.exports = Node;
