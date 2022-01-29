import { useState } from "react";
import data from "../../data/sidebarData.json";
import {
  Container,
  Overlay,
  TopContainer,
  LogoContainer,
  UserImage,
  SidebarTitle,
  SidebarSubtitle,
  BottomContainer,
  SidebarList,
  SidebarItem,
  IconContainer,
  ItemTitle,
  SidebarDrop,
  DropItem,
} from "./styledSidebar";


export const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const [toggleDropdown, setToggleDropdown] = useState(0);

  const handleToggleDropdown = index => {
    if (toggleDropdown === index) {
      return setToggleDropdown(null);
    }

    setToggleDropdown(index);
  };

  const sidebarData = data.map(link => (
    <SidebarItem key={link.id} onClick={() => link.drop && handleToggleDropdown(link.id)}>
      <div>
        <IconContainer>
          <i className={link.icon}></i>
        </IconContainer>
        <ItemTitle toggleDropdown={toggleDropdown === link.id && toggleDropdown}>
          {link.title} {link.arrowIcon && <i className={link.arrowIcon}></i>}
        </ItemTitle>
      </div>
      {(link.drop && toggleDropdown === link.id) ? link.links.map(lnk => (
        <SidebarDrop key={lnk.id} toggleDropdown={toggleDropdown}>
          <DropItem toggleDropdown={toggleDropdown}>
            {lnk.title}
          </DropItem>
        </SidebarDrop>
      )) : null}
    </SidebarItem>
  ));

  return (
    <>
      <Overlay toggleSidebar={toggleSidebar} onClick={() => setToggleSidebar(false)} />
      <Container toggleSidebar={toggleSidebar}>
        <TopContainer>
          <i className="uil uil-times" onClick={() => setToggleSidebar(false)}></i>
          <LogoContainer><img src="/images/logo.png" alt="Logo" /></LogoContainer>
          <UserImage><img src="/images/user-sidebar.png" alt="User" /></UserImage>
          <SidebarTitle>Username</SidebarTitle>
          <SidebarSubtitle>General Manager.</SidebarSubtitle>
        </TopContainer>
        <BottomContainer>
          <SidebarList>
            {sidebarData}
          </SidebarList>
        </BottomContainer>
      </Container>
    </>
  );
};
