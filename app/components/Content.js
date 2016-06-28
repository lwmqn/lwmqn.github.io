import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import MarkdownElement from './MarkdownElement';

// input: props.rawMd
var Content = React.createClass({
    render: function () {
        return (
            <section>
                <MarkdownElement text={this.props.rawMd} />
            </section>
        );
    }
});

module.exports = Content;
