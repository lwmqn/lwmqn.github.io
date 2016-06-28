import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

var App = require('./modules/App');
var Home = require('./modules/Home');

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <App>
        <Home />
      </App>
    </div>
  </MuiThemeProvider>
  ),
    document.getElementById("app")
);
