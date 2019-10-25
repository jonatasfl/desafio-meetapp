import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
    background: linear-gradient(180deg, #22202c 0%, #402845 100%)
  }

  button {
    cursor: pointer;
  }

  main {
    margin: 50px 250px;
    max-width: 940px;
    min-height: 500px;
  }
`;
