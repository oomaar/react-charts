import styled from "styled-components";

export const PerformanceContainer = styled.div``;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  background: linear-gradient(
    127.09deg,
    rgba(16, 21, 50, 0.94) 25.41%,
    rgba(40, 24, 45, 0.49) 69.65%
  );
  margin: 2rem 0;
  width: 90%;
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

  &.details {
    width: 60px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableBodyCell = styled.td`
  padding: 1rem 0;
  color: #fff;
  border-bottom: 1px solid #56577a;
`;
