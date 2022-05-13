import { createGlobalStyle } from "styled-components";

export const NavbarHeight = `60px`;

export const SidebarWidth = `300px`;

export const theme = {
  colors: {
    bodyColor: `linear-gradient(
      159deg,
      #0f123b 14.25%,
      #090d2e 56.45%,
      #020515 86.14%
    )  center center / cover no-repeat`,
    containerColor: `radial-gradient(
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
    buttonColor: `#582cff`,
    buttonHover: `#582cee`,
    textColor: `#6d778e`,
    inputColor: `#131536`,
    borderColor: `#3182ce`,
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
    background: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
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
