import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './modules/App'
import Home from './modules/Home'
import Shepherd from './modules/Shepherd'
import Node from './modules/Node'
import Repo from './modules/Repo'

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/shepherd" component={Shepherd} />
            <Route path="/node" component={Node}>
                <Route path="/node/:userName/:repoName" component={Repo} />
            </Route>
        </Route>
    </Router>
  </MuiThemeProvider>
  ),
    document.getElementById("app")
);
