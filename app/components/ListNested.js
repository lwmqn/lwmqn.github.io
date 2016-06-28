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
  onTocuhed: function (name, evt) {
    var titleName = name;
    // for (var k in titleName) {
    //   if (titleName.hasOwnProperty(k))
    //     console.log(titleName[k]);
    // }
    console.log(titleName);
  },
  render: function () {
    var listTitles = (function () {
      return this.props.titles.map(function (title, i) {
              return (
                <ListItem key={"title-"+i} value={title.name} primaryText={title.name} disabled={false} style={itemStyle} onTouchTap={this.onTocuhed.bind(this, title.name)}/>
              );
      }.bind(this));
    }.bind(this))();

    var listApis = (function () {
      return this.props.apis.map(function (api, index) {
              return (
                <ListItem key={"api-"+index} value={api.name} style={itemStyle2} inset={false} key={index} primaryText={api.name} />
              );
      }.bind(this));
    }.bind(this))();

    return (
        <List>
          <Divider inset={false} />
          {listTitles}
          <Divider inset={false} />

          <ListItem
            key={"title-"+this.props.titles.length}
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

