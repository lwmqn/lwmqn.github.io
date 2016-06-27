import React from 'react'
import { Link } from 'react-router'

var activeStyle = { color: '#E67E22' };

var NavLink = React.createClass({
    render: function () {
        return <Link {...this.props} activeStyle={activeStyle} />
    }
});

module.exports = NavLink;