import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar } from "./components/organisms";
import { HomePage } from "./components/pages";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={HomePage} />
    </Router>
  );
};
