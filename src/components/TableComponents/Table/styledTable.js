import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    127.09deg,
    rgba(16, 21, 50, 0.94) 25.41%,
    rgba(40, 24, 45, 0.49) 69.65%
  );
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 4rem;
  width: 95%;
`;

export const TableTable = styled.table`
  margin: 2rem 0;
  width: 100%;
  padding: 1rem;
  height: ${(
  // @ts-ignore
  { displayNumberOfEntriesPerPage }
) =>
    displayNumberOfEntriesPerPage === 10
      ? "100vh"
      : displayNumberOfEntriesPerPage === 25
        ? "235vh"
        : displayNumberOfEntriesPerPage === 50
          ? "435vh"
          : displayNumberOfEntriesPerPage === 100
            ? "1010vh"
            : displayNumberOfEntriesPerPage < 10
              ? "40vh"
              : ""};
`;

export const TableHead = styled.thead`
  color: hsla(200, 100%, 100%, 0.6);
`;

export const TableHeadCell = styled.th`
  width: 200px;
  margin: 0;
  padding: 0 0 1rem 0.3rem;
  text-align: left;
  border-bottom: 1px solid #56577a;
  position: relative;
  cursor: pointer;

  &.details {
    width: 80px;
  }

  ::before,
  ::after {
    position: absolute;
    color: hsla(200, 100%, 100%, 0.6);
    font-size: 1rem;
  }

  ::before {
    content: "⌃";
    top: 0;
    right: 8px;
  }

  ::after {
    content: "⌄";
    top: 10%;
    right: 8px;
  }

  &.ascending::before {
    color: hsla(235, 100%, 100%, 1);
  }

  &.descending::after {
    color: hsla(235, 100%, 100%, 1);
  }
`;

export const TableBodyCell = styled.td`
  padding: 1rem 0;
  color: #fff;
  border-bottom: 1px solid #56577a;

  i {
    cursor: pointer;
  }
`;
