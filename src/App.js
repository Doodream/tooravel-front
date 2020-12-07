import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './containers/Home';


function App() {
  return (
    <Router>
      <Switch>
        <CssBaseline />
        <Route exact path ="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
