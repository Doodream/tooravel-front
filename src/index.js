import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './containers/home/Home';
import SlideSection from './containers/home/Section/SlideSection';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    {/* <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);
