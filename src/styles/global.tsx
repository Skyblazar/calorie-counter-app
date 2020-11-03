import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{ 
      font-family: 'Nunito', sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
      /* min-height: 100vh; */
      background-color: #EAF1ED;
  }

  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
