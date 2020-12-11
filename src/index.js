import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './containers/PageHome/Home';
import PageLogin from './containers/PageLogin/PageLogin';
import PageSignup from './containers/PageLogin/PageSignup';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={PageLogin} />
        <Route exact path='/signup' component={PageSignup} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
