import styled from "styled-components";
import { NavbarHeight, SidebarWidth } from "../../Global/GlobalStyle";

export const NavbarNav = styled.nav`
  position: fixed;
  inset: 0;
  bottom: unset;
  height: ${NavbarHeight};
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 1rem;
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
