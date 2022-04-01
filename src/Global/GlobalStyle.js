import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Karla', sans-serif;
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
