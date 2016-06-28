import React from 'react';
import marked from 'marked';
import hlt from 'highlight.js';


marked.setOptions({
  highlight: function (code) {
    return hlt.highlightAuto(code).value;
  }
});

/**************************************************/
/*** <MarkdownElement text={you_markdown}/>     ***/
/**************************************************/
var mdcss = require('../styles/markdown.css');

module.exports = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    defaultProps: {
        text: ''
    },
    render: function () {
        var style = {
            marginTop: 20,
            marginBottom: 20,
            padding: '0 50px'
        };

        return (
            <div className={ mdcss["markdown-body"]} styles={style} dangerouslySetInnerHTML={{__html: marked(this.props.text)}} />
        );
    }
});
