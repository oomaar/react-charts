import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    bodyColor: `radial-gradient(
      69.43% 69.43% at 50% 50%,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      60% 51.57% at 50% 50%,
      #582cff 0%,
      rgba(88, 44, 255, 0) 100%
    ),
    radial-gradient(54.8% 53% at 50% 50%, #151515 0%, rgba(21, 21, 21, 0) 100%)`,
  },
};

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
