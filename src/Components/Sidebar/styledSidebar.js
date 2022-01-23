import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ toggleSidebar }) => toggleSidebar ? "flex" : "none"};
  transform: ${({ toggleSidebar }) => toggleSidebar ? "translateX(0)" : "translateX(-100vh)"};
  transition: all 0.5s ease-in-out;
  flex-direction: column;
  background-color: #2f3c4e;
  color: #fff;
  height: 100vh;
  width: 40%;
  z-index: 100;
`;

export const ImageContainer = styled.div`
  img {
    width: 120px;
  }
`;

export const SidebarHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid #fafafa;
`;
export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
`;
export const Subtitle = styled.p`
  text-transform: uppercase;
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  cursor: pointer;
`;

export const LinkIcon = styled.div`
  margin: 0 1rem;
`;

export const LinkSpan = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  svg {
    margin: 0 1rem;
  }
`;