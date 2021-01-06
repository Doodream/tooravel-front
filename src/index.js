import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageHome from './domains/informing/PageHome/PageHome';
import PageIntro from './domains/informing/PageAbout/PageIntro';
import PagePartnershipInquiry from './domains/informing/PageAbout/PagePartnershipInquiry';
import PageContact from './domains/informing/PageAbout/PageContact';

import PageTos from './domains/informing/PageTou/PageTos';
import PagePrivacy from './domains/informing/PageTou/PagePrivacy';
import PageRentRule from './domains/informing/PageTou/PageRentRule';

import PageLogin from './domains/account/Login';
import PageSignup from './domains/account/Signup';

import PageSettingAccount from './domains/account/myPage/PageSettingAccount'

import PageProduct from './domains/product/PageProduct';
import PageProductTip from './domains/product/PageProductTip/PageProductTip';
import PageVideoClip from './domains/product/PageVideoClip/PageVideoClip';


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

        <Route exact path='/product' component={PageProduct} />
        <Route exact path='/product/goProTips' component={PageProductTip} />
        <Route exact path='/product/goProVideos' component={PageVideoClip} />

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
