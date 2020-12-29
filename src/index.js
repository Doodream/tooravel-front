import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageHome from './containers/PageHome/PageHome';
import PageIntro from './containers/PageAbout/PageIntro';
import PagePartnershipInquiry from './containers/PageAbout/PagePartnershipInquiry';
import PageContact from './containers/PageAbout/PageContact';

import PageLogin from './domains/account/Login';
import PageSignup from './domains/account/Signup';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path='/' component={PageHome} />
        <Route exact path='/login' component={PageLogin} />
        <Route exact path='/signup' component={PageSignup} />
        <Route exact path='/about/intro' component={PageIntro} />
        <Route exact path='/about/partnershipInquiry' component={PagePartnershipInquiry} />
        <Route exact path='/about/contact' component={PageContact} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
