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
};
