import styled from "styled-components";
import { SidebarWidth } from "../../Global/GlobalStyle";

export const SidebarContainer = styled.aside`
  background: linear-gradient(
    111.84deg,
    rgba(6, 11, 38, 0.94) 59.3%,
    rgba(26, 31, 55, 0.4) 100%
  );
  height: 90vh;
  position: fixed;
  inset: 2rem;
  width: ${SidebarWidth};
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
  transform: ${({ showSidebar }) => (showSidebar ? "scale(1)" : "scale(0)")};
  transition: all 0.4s ease-in;
  z-index: 1000;

  @media screen and (max-width: 665px) {
    background: linear-gradient(
      111.84deg,
      rgba(6, 11, 38, 1) 59.3%,
      rgba(26, 31, 55, 1) 100%
    );
    inset: 0;
    width: 100%;
    height: 100vh;
    transform: ${({ showSidebar }) =>
      showSidebar ? "scale(1) translateX(0)" : "scale(1) translateX(-1000vh)"};
  }
`;

export const SidebarHeader = styled.header`
  div {
    display: flex;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(224, 225, 226, 0) 0%,
      #e0e1e2 47.22%,
      rgba(224, 225, 226, 0.15625) 94.44%
    );
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0 2rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.buttonColor};
  }
`;

export const SidebarCloseIcon = styled.div`
  display: none;

  @media screen and (max-width: 665px) {
    display: block;
    position: absolute;
    right: 2rem;
    cursor: pointer;
    font-size: 2rem;
  }
`;

export const SidebarListContainer = styled.div`
  margin-top: 1rem;
`;

export const SidebarListGroup = styled.div`
  @media screen and (max-width: 665px) {
    text-align: center;
  }
`;

export const SidebarListGroupToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;

  .bx-chevron-down {
    margin-left: auto;
    transform: ${({ activeIndex }) =>
      activeIndex ? "rotate(0deg)" : "rotate(-90deg)"};
    transition: all 0.3s ease-in;
  }

  &.active {
    background: #090daf;
  }

  :hover {
    background: #090daf;
  }
`;

export const SidebarList = styled.ul`
  overflow: hidden;
  height: 0;
  opacity: 0;
  visibility: hidden;
  height: ${({ activeIndex }) => (activeIndex ? "auto" : 0)};
  opacity: ${({ activeIndex }) => (activeIndex ? "1" : 0)};
  visibility: ${({ activeIndex }) => (activeIndex ? "visible" : "hidden")};
  margin: 0 1rem;
  transition: all 0.3s ease-in;

  li {
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: all 0.3s ease-in;

    :hover {
      background: #090daf;
    }
  }
`;
