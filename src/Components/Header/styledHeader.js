import styled from 'styled-components';
import { SidebarWith, transition } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: ${({ toggleSidebar }) => toggleSidebar ? SidebarWith : "0"};
  transition: ${transition};
  z-index: 800;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem 0;
    margin-left: 0;
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

export const BurgerIconContainer = styled.div`
  font-size: 1.5rem;
  color: #4466f2;
  cursor: pointer;
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
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 0 2rem;
  border: 1px solid #e0e0e0;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
    padding: 0.2rem 1rem;
    height: 50px;
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
  font-size: 1.5rem;
  color: #4466f2;
  padding: 0 1rem;
`;

export const UserAvatar = styled.div`
  margin: 0 1rem;
  
  img {
    width: 60px;

    @media screen and (max-width: 768px) {
      width: 50px;
    }
  }
`;