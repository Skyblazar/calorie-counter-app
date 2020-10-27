import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage, CountPage } from "./components/pages";
import {Context} from './newStore'
export const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/count" component={CountPage} />
      </Switch>
    </Router>
  );
};
