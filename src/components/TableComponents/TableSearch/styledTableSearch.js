import styled from "styled-components";

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
