import styled from "styled-components";
import { Sidebar, Navbar } from ".";
import { NavbarHeight, SidebarWidth } from "../Global/GlobalStyle";
import { useState } from "react";

const Application = styled.main`
  margin: calc(${NavbarHeight} + 2.5rem) auto 0 0;
  margin-left: ${({ showSidebar }) =>
    showSidebar ? `calc(${SidebarWidth} + 2.5rem)` : `0`};
  transition: margin-left 0.4s ease-in;
  border: 1px solid #f00;
`;

export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Application showSidebar={showSidebar}>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      {children}
      {/* Footer */}
    </Application>
  );
};
