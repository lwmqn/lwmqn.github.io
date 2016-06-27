import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

var itemStyle = { 
  fontSize: "80%"
};

var itemStyle2 = { 
  fontSize: "75%"
};

// props
//   titles: [ { name, link }, ... ]
//   apis: [ { name, anchor }, ... ]

var ListNested = React.createClass({
  render: function () {
    var listTitles = (function () {
      return this.props.titles.map(function (title) {
              return (
                <ListItem primaryText={title.name} disabled={false} style={itemStyle} />
              );
      }.bind(this));
    }.bind(this))();

    var listApis = (function () {
      return this.props.apis.map(function (api, index) {
              return (
                <ListItem style={itemStyle2} inset={false} key={index} primaryText={api.name} />
              );
      }.bind(this));
    }.bind(this))();

    return (
        <List>
          <Divider inset={false} />
          {listTitles}
          <Divider inset={false} />

          <ListItem
            primaryText="APIs"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={listApis}
          />
          <Divider inset={false} />
        </List>
    );
  }
});

module.exports = ListNested;

