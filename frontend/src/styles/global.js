import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

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

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;

    &:hover {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  p {
    margin-bottom: 25px;
  }

  button {
    cursor: pointer;
  }

  input:not([type="radio"]), input:not([type="checkbox"]) {
    width: 100%;
    border: 0;
    height: 50px;
    font-size: 18px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  textarea {
    width: 100%;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin-bottom: 10px;
    border: 0;
    border-radius: 4px;
  }

  form.with-validation input ~ span {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    color: ${lighten(0.3, '#d44059')};
  }
`;
