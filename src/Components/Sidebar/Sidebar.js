<<<<<<< HEAD
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
} from "./styledSidebar";


export const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    const sidebarData = data.map(link => (
        <SidebarItem key={link.id}>
            <IconContainer>
                <i className={link.icon}></i>
            </IconContainer>
            <ItemTitle>{link.title} {link.arrowIcon && <i className={link.arrowIcon}></i>}</ItemTitle>
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
=======
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBars,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsCalendar, BsChevronRight } from "react-icons/bs";
import { FiSettings, FiUsers } from "react-icons/fi";
import {
  Container,
  ImageContainer,
  SidebarHeader,
  Subtitle,
  Title,
  LinksContainer,
  Link,
  LinkIcon,
  LinkSpan,
  Background,
} from "./styledSidebar";

export const Sidebar = ({ toggleSidebar }) => {
  return (
    <Background>
      <Container toggleSidebar={toggleSidebar}>
        <SidebarHeader>
          <ImageContainer>
            <img src="/images/user.png" alt="" />
          </ImageContainer>
          <Title>Hassan</Title>
          <Subtitle>General Manager</Subtitle>
        </SidebarHeader>
        <LinksContainer>
          <Link>
            <LinkIcon>
              <AiOutlineHome />
            </LinkIcon>
            <LinkSpan>
              Dashboard <BsChevronRight />
            </LinkSpan>
          </Link>
          <Link>
            <LinkIcon>
              <AiOutlineBars />
            </LinkIcon>
            <LinkSpan>
              Social Media <BsChevronRight />
            </LinkSpan>
          </Link>
          <Link>
            <LinkIcon>
              <FiUsers />
            </LinkIcon>
            <LinkSpan>
              Users <BsChevronRight />
            </LinkSpan>
          </Link>
          <Link>
            <LinkIcon>
              <BsCalendar />
            </LinkIcon>
            <LinkSpan>
              Calender <BsChevronRight />
            </LinkSpan>
          </Link>
          <Link>
            <LinkIcon>
              <AiOutlineBars />
            </LinkIcon>
            <LinkSpan>Tasks</LinkSpan>
          </Link>
          <Link>
            <LinkIcon>
              <AiOutlineQuestionCircle />
            </LinkIcon>
            <LinkSpan>FAQ</LinkSpan>
          </Link>
          <Link>
            <LinkIcon>
              <FiSettings />
            </LinkIcon>
            <LinkSpan>Maintenance</LinkSpan>
          </Link>
        </LinksContainer>
      </Container>
    </Background>
  );
>>>>>>> 457dff023a25407070c72af316cfc122588660f0
};
