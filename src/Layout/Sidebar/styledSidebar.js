import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: linear-gradient(
    111.84deg,
    rgba(6, 11, 38, 0.94) 59.3%,
    rgba(26, 31, 55, 0.4) 100%
  );
  height: 90vh;
  position: fixed;
  inset: 2rem;
  width: 300px;
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
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

export const SidebarListContainer = styled.div``;

export const SidebarListGroup = styled.div``;

export const SidebarListGroupToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s ease-in;

  .bx-chevron-down {
    margin-left: auto;
    transform: rotate(-90deg);
  }

  :hover {
    background: #090d2f;
  }
`;

export const SidebarList = styled.ul`
  overflow: hidden;
  transition: all 0.3s ease-in;
  height: ${({ activeIndex }) => (activeIndex ? "auto" : 0)};
  opacity: ${({ activeIndex }) => (activeIndex ? "1" : 0)};
  visibility: ${({ activeIndex }) => (activeIndex ? "visible" : "hidden")};
`;
