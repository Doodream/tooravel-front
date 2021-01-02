import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageHome from './domains/home/PageHome';
import PageIntro from './domains/introduce/PageAbout/PageIntro';
import PagePartnershipInquiry from './domains/introduce/PageAbout/PagePartnershipInquiry';
import PageContact from './domains/introduce/PageAbout/PageContact';

import PageTos from './domains/introduce/PageTou/PageTos';
import PagePrivacy from './domains/introduce/PageTou/PagePrivacy';
import PageRentRule from './domains/introduce/PageTou/PageRentRule';

import PageLogin from './domains/account/Login';
import PageSignup from './domains/account/Signup';

import PageSettingAccount from './domains/myPage/PageSettingAccount'


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

        <Route exact path='/tou/tos' component={PageTos} />
        <Route exact path='/tou/privacy' component={PagePrivacy} />
        <Route exact path='/tou/rentRule' component={PageRentRule} />

        <Route exact path='/mypage/settingAccount/:page' component={PageSettingAccount} />

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
