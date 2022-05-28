import styled from "styled-components";

export const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0 auto 2rem;
  width: 90%;
  border-radius: 1rem;
  background: linear-gradient(
    127.09deg,
    rgba(26, 21, 50, 0.94) 25.41%,
    rgba(20, 24, 45, 0.49) 69.65%
  );
`;

export const PageHeaderTitle = styled.h1`
  color: #fff;
`;

export const PageFiltersContainer = styled.div`
  position: relative;
`;

export const UserFilterContainer = styled.div`
  background: #090daf;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  color: #fff;
  max-width: 250px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;
    transition: all 0.3s ease;

    .bx-chevron-down {
      transform: ${({ userList }) =>
        userList ? "rotate(180deg)" : "rotate(0deg)"};
    }
  }
`;

export const UserFilterList = styled.ul`
  display: ${({ userList }) => (userList ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1000;
  background: #090daf;
  list-style-type: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  right: 0.1rem;

  div {
    display: flex;
    position: relative;

    i {
      color: #000;
      font-weight: bold;
      font-size: 1.2rem;
      cursor: pointer;
      position: absolute;
      right: 0.1rem;
      top: 10%;
    }
  }

  input {
    border: 1px solid #aaa;
    outline: 0;
    width: 100%;
    font-size: 1rem;
    border-radius: 1rem;
    padding-left: 1rem;
  }
`;

export const UserFilterItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 0.5rem;

  :hover {
    background: #090d91;
  }
`;
