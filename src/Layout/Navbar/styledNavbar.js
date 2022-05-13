import styled from "styled-components";
import { NavbarHeight, SidebarWidth } from "../../Global/GlobalStyle";

export const NavbarNav = styled.nav`
  background: linear-gradient(
    111.84deg,
    rgba(6, 11, 38, 0.94) 59.3%,
    rgba(26, 31, 55, 0.9) 100%
  );
  position: fixed;
  inset: 0;
  bottom: unset;
  height: ${NavbarHeight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 1rem;
  padding: 0.6rem 1rem;
  z-index: 1000;
`;

export const NavbarButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem 0;
  margin-right: auto;
  margin-left: ${({ showSidebar }) =>
    showSidebar ? `calc(${SidebarWidth} + 2.5rem)` : `0`};
  cursor: pointer;
  transition: all 0.4s ease-in;

  @media screen and (max-width: 665px) {
    margin-left: 0;
  }
`;

export const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  border-radius: 1rem;
  transition: all 1s ease-in;

  @media screen and (min-width: 665px) {
    :nth-child(1) {
      background-color: ${({ showSidebar }) =>
        !showSidebar ? "#fff" : "#b33a3a"};
      transform: ${({ showSidebar }) =>
        !showSidebar
          ? "rotate(0) translateY(0) translateX(0)"
          : "rotate(45deg) translateY(12px) translateX(13px)"};
    }

    :nth-child(2) {
      width: ${({ showSidebar }) => (showSidebar ? "0" : "25px")};
    }

    :nth-child(3) {
      background-color: ${({ showSidebar }) =>
        !showSidebar ? "#fff" : "#b33a3a"};
      transform: ${({ showSidebar }) =>
        !showSidebar
          ? "rotate(0) translateX(0)"
          : "rotate(-45deg) translateX(1px)"};
    }
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1rem;
  padding-left: 0.5rem;
  color: #fff;
  width: 100%;
  transition: all 0.5s ease-in;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  width: 200px;
  height: 35px;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease-in;

  :focus-within {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;

export const SearchInputIcon = styled.div`
  font-size: 1.1rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  font-size: 1.2rem;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const LogoutButton = styled.button`
  background: 0;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in;

  :hover {
    background-color: #090daf;
    border: 1px solid transparent;
  }
`;
