import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *, body {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;    
  }
  body {
    background-color: #22272e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
