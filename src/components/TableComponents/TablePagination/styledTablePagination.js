import styled from "styled-components";

export const TablePaginationContaier = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const TablePaginationButton = styled.button`
  background: transparent;
  border: 1px solid #56577a;
  color: #fff;
  padding: 0.6rem;
  margin: 0 0.3rem;
  border-radius: 0.3rem;

  &.active {
    background: #090daf;
  }
`;
