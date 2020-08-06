import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{ 
      margin: 0;
      padding: 0 1em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
      min-height: 100vh;
      background-color: #e9f1ed;
  }

  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
