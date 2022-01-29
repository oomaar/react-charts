import { createGlobalStyle } from 'styled-components';

export const transition = `all 0.5s ease-in`;

export const SidebarWith = `260px`;

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
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background-color: #f8f8f8;
  }
`;