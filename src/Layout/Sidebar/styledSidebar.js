import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: linear-gradient(
    111.84deg,
    rgba(6, 11, 38, 0.94) 59.3%,
    rgba(26, 31, 55, 0) 100%
  );
  height: 100vh;
  position: fixed;
  inset: 2rem;
  width: 300px;
  border-radius: 1rem;
  padding: 1rem;
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
