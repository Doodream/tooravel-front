import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './containers/home/Home';
import LoginPage from './containers/loginPage/LoginPage'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
