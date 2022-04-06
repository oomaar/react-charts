import styled from "styled-components";

export const NavbarNav = styled.nav`
  border: 1px solid red;
  position: fixed;
  inset: 0;
  bottom: unset;
  height: 50px;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ openSearchBar, theme }) =>
      openSearchBar ? theme.colors.borderColor : "#fff"};
  width: ${({ openSearchBar }) => (openSearchBar ? "200px" : "40px")};
  height: 35px;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease-in;
`;

export const SearchInputIcon = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1rem;
  padding-left: 0.5rem;
  color: #fff;
  width: ${({ openSearchBar }) => (openSearchBar ? "100%" : "0")};
  transition: all 0.5s ease-in;
`;

export const UserContainer = styled.div``;

export const UserAvatar = styled.div``;

export const UserName = styled.p``;
