import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

var Footer = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div style={{color: "#CCC", fontSize:"60%", textAlign: "center", padding: "0.4rem 0"}}>
                LWMQN Project, 2016
            </div>

        );
    }
});

module.exports = Footer;
