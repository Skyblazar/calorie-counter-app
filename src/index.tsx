import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router} from 'react-router-dom'

import "./index.css";
import { App } from "./App";
import { GlobalStyle, theme } from "./styles";
import * as serviceWorker from "./serviceWorker";
import { AppProvider } from "./newStore";

if (process.env.NODE_ENV === "production")
  axios.defaults.baseURL = "https://caloric-bk.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </AppProvider>
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
