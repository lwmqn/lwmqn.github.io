import React from 'react';

var Repo = React.createClass({
    render: function () {
        return (<div>
            <h2>{this.props.params.repoName}</h2>
        </div>);
    }
});

module.exports = Repo;
