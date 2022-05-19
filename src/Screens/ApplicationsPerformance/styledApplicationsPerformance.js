import styled from "styled-components";

export const PerformanceContainer = styled.div``;

// <Table />
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
  margin: 2rem 0;
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

export const Table = styled.table`
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

  i {
    cursor: pointer;
  }
`;

// <TableSearch />
export const TableSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
`;

export const TableEntriesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.55rem;

  span {
  }
`;

export const TableEntriesDropDown = styled.select`
  background: transparent;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.3rem;
  font-size: 1rem;

  option {
    color: #000;
  }
`;

export const TableSearchInputContainer = styled.div`
  display: flex;
  gap: 0 1rem;
  align-items: center;

  label {
  }
`;

export const TableSearchInput = styled.input`
  background: transparent;
  border: 1px solid #56577a;
  color: #fff;
  border-radius: 1rem;
  padding: 0.3rem;
  padding-left: 1rem;
  font-size: 1rem;
  outline: 0;
  transition: all 0.3s ease-in;

  :focus {
    border-color: ${({ theme }) => theme.colors.borderColor};
  }
`;

export const TableButtonsContainer = styled.div``;

export const TableDownloadButton = styled.button`
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  font-weight: 700;
  transition: all 0.3s ease-in;

  &.excel {
    background-color: #090daf;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.pdf {
    background-color: #ff7676;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  i {
    margin-right: 0.1rem;
  }
`;

// <TablePagination />
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

// Modal
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 9999;
  transition: all 0.5s ease-in;
  transform: ${(
    // @ts-ignore
    { showModal }
  ) => (showModal ? "translateY(0)" : "translateY(-500vh)")};
`;

export const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  transform: ${(
    // @ts-ignore
    { showModal }
  ) => (showModal ? "scale(1)" : "scale(0)")};
`;

export const ModalContentContainer = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  background: #002200;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ModalTitle = styled.h1``;
