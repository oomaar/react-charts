import styled from "styled-components";
import { Sidebar, Navbar } from ".";
import { NavbarHeight, SidebarWidth } from "../Global/GlobalStyle";

const Application = styled.main`
  margin: calc(${NavbarHeight} + 2.5rem) auto 0 calc(${SidebarWidth} + 2.5rem);
`;

export const Layout = ({ children }) => {
  return (
    <Application>
      <Navbar />
      <Sidebar />
      {children}
      {/* Footer */}
    </Application>
  );
};
