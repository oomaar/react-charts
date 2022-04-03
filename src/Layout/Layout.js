import { ThemeProvider } from "styled-components";
import { Sidebar } from ".";
import { theme } from "../Global/GlobalStyle";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <Sidebar />
      {children}
      {/* Footer */}
    </ThemeProvider>
  );
};
