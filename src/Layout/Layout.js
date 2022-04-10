import styled from "styled-components";
import { Sidebar, Navbar } from ".";
import { NavbarHeight, SidebarWidth } from "../Global/GlobalStyle";
import { useState } from "react";

const Application = styled.main`
  margin: calc(${NavbarHeight} + 2.5rem) auto 0 calc(${SidebarWidth} + 2.5rem);
`;

export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Application>
      <Navbar setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      {children}
      {/* Footer */}
    </Application>
  );
};
