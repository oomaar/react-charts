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

export const TableAdjustHieghtContainer = styled.div`
  width: 100%;
  /* max-height: 1000vh;
  min-height: 100vh;
  height: 100%; */
  height: ${(
    // @ts-ignore
    { displayNumberOfEntriesPerPage }
  ) =>
    displayNumberOfEntriesPerPage === 10
      ? "100vh"
      : displayNumberOfEntriesPerPage === 25
      ? "230vh"
      : displayNumberOfEntriesPerPage === 50
      ? "500vh"
      : displayNumberOfEntriesPerPage === 100
      ? "1000vh"
      : displayNumberOfEntriesPerPage < 10
      ? "50vh"
      : ""};
`;

export const TableTable = styled.table`
  margin: 2rem 0;
  width: 100%;
  padding: 1rem;
`;

export const TableHead = styled.thead`
  color: #fff;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  width: 200px;
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
  text-align: left;
  border-bottom: 1px solid #56577a;
  position: relative;

  &.details {
    width: 60px;
  }

  ::before,
  ::after {
    position: absolute;
    color: hsla(200, 100%, 100%, 0.6);
    font-size: 1rem;
  }

  ::before {
    content: "⌃";
    top: 25%;
    right: 3px;
  }

  ::after {
    content: "⌄";
    top: 30%;
    right: 3px;
  }

  &.ascending::before {
    color: hsla(235, 100%, 100%, 1);
  }

  &.descending::after {
    color: hsla(235, 100%, 100%, 1);
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableBodyCell = styled.td`
  padding: 1rem 0;
  color: #fff;
  border-bottom: 1px solid #56577a;

  i {
    cursor: pointer;
  }
`;
