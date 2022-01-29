import styled from 'styled-components';
import { SidebarWith, transition } from '../../Global/GlobalStyle';

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #2f3c4e;
  color: #fff;
  width: ${SidebarWith};
  padding: 0 1rem 0 0;
  transform: ${({ toggleSidebar }) => toggleSidebar ? "translateX(0vh)" : "translateX(-100vh)"};
  transition: ${transition};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(0, 0, 0, 0.5);
  transform: ${({ toggleSidebar }) => toggleSidebar ? "translateX(0vh)" : "translateX(400vh)"};
  transition: ${transition};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 2rem;

  i {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  img {
    border-radius: 2rem;
  }
`;

export const UserImage = styled.div`
  margin: 1rem 0;

  img {
    width: 60px;
  }
`;

export const SidebarTitle = styled.p`
  margin: 0.2rem 0 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const SidebarSubtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

export const BottomContainer = styled.div``;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const IconContainer = styled.div`
  margin: 0 1rem;
  transition: ${transition};
`;

export const ItemTitle = styled.p`
  width: 100%;
  display: flex;
  margin: 0;
  position: relative;
  transition: ${transition};

  i {
    position: absolute;
    right: 0;
    transition: ${transition};
    transform: ${({ toggleDropdown }) => toggleDropdown ? "rotate(90deg)" : "rotate(0deg)"};
  }
`;

export const SidebarItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 0.6rem 0;
  transition: ${transition};
  font-size: 0.9rem;

  div {
    display: flex;
    align-items: center;
  }
`;

export const SidebarDrop = styled.ul`
  margin: 1rem 0 0;
  font-size: 0.8rem;
  padding-left: 4rem;
  overflow: hidden;
  visibility: ${({ toggleDropdown }) => toggleDropdown ? "visible" : "hidden"};
  opacity: ${({ toggleDropdown }) => toggleDropdown ? "1" : "0"};
  height: ${({ toggleDropdown }) => toggleDropdown ? "auto" : "0"};
  transition: ${transition};
`;

export const DropItem = styled.li`
  list-style: disc;
  transform: ${({ toggleDropdown }) => toggleDropdown ? "translateX(0)" : "translateX(-100vh)"};;
  transition: ${transition};
`;