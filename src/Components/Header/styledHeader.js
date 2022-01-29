import styled from 'styled-components';
import { SidebarWith, transition } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 1rem;
  margin-left: ${({ toggleSidebar }) => toggleSidebar ? SidebarWith : "0"};
  transition: ${transition};
  z-index: 800;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem 0;
    margin-left: 0;
    padding: 0.5rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: ${transition};

  @media screen and (max-width: 768px) {
    transform: ${({ toogleHeader }) => toogleHeader ? "translateY(0)" : "translateY(-100vh)"};
  }

  @media screen and (max-width: 535px) {
    flex-direction: column;
    gap: 1rem 0;
  }
`;

export const SubBox = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const HeaderLogo = styled.div`
  display: none;

  img {
    width: 100px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 0 1rem;
  }
`;

export const BurgerIconContainer = styled.div`
  font-size: 1.5rem;
  color: #4466f2;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderToggleIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #4466f2;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  width: 50%;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 0 auto;
  border: 1px solid #e0e0e0;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
    padding: 0.2rem 1rem;
    height: 50px;
  }

  @media screen and (max-width: 535px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  font-size: 1.5rem;
  color: #9c908e;
  border-right: 1px solid #e0e0e0;
  padding: 0 1rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  outline: 0;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightIconContainer = styled.div`
  display: flex;
  gap: 0 0.5rem;
  align-items: center;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  font-size: 1.2rem;
  color: #4466f2;
  padding: 0 1rem;
  cursor: pointer;
`;

export const UserDropdown = styled.ul`
  position: absolute;
  top: 60%;
  right: 0;
  padding: 0 1rem;
  width: 160px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  opacity: 0;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  transform: translateY(40px);
  transition: ${transition};

  div {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const DropItem = styled.li`
  list-style: none;
  display: flex;
  font-size: 1rem;
  margin: 0.7rem 0;
  cursor: pointer;
  transition: ${transition};
  
  i {
    margin-right: 0.5rem;
  }

  :hover {
    color: #4466f2;
  }
`;

export const UserAvatar = styled.div`
  margin: 0 1rem;
  cursor: pointer;
  position: relative;
  
  img {
    width: 60px;

    @media screen and (max-width: 768px) {
      width: 50px;
    }
  }

  :hover > ${UserDropdown} {
    opacity: 1;
    visibility: visible;
    height: auto;
    transform: translateY(0px);
  }
`;
