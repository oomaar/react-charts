import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    transition: all 0.5s ease-in-out;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;