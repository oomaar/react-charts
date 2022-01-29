import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 0;
  padding: 1rem;
  background-color: #fff;
`;

export const TableContainer = styled.table`
  table-layout: fixed;
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;

  td {
    text-align: center;
  }

  thead th {
    :first-of-type {
      width: 10%;
    }
  }

   tbody tr {
    :nth-child(2n+1) {
      background-color: #ccc;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
    background-color: rgb(68, 102, 242);
    border: none;
    outline: none;
    padding: 7px;
    margin-left: 1%;
    color: #fff;
    cursor: pointer;
`;