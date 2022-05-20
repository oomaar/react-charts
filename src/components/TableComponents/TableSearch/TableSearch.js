import {
  TableButtonsContainer,
  TableDownloadButton,
  TableEntriesContainer,
  TableEntriesDropDown,
  TableSearchContainer,
  TableSearchInput,
  TableSearchInputContainer,
} from "./styledTableSearch";

export const TableSearch = ({
  data,
  searchTerm,
  setSearchTerm,
  setTableRowsPerPage,
}) => {
  return (
    <TableSearchContainer>
      <TableEntriesContainer>
        <span>Show</span>
        <TableEntriesDropDown
          onChange={(e) => setTableRowsPerPage(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="25" disabled={data.length < 25 ? true : false}>
            25
          </option>
          <option value="50" disabled={data.length < 50 ? true : false}>
            50
          </option>
          <option value="100" disabled={data.length < 100 ? true : false}>
            100
          </option>
        </TableEntriesDropDown>
        <span>Entries</span>
      </TableEntriesContainer>
      <TableSearchInputContainer>
        <label>Search: </label>
        <TableSearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Table"
        />
        <TableButtonsContainer>
          <TableDownloadButton className="excel">
            <i className="bx bxl-microsoft-teams" /> Excel
          </TableDownloadButton>
          <TableDownloadButton className="pdf">
            <i className="bx bxs-file-pdf" /> PDF
          </TableDownloadButton>
        </TableButtonsContainer>
      </TableSearchInputContainer>
    </TableSearchContainer>
  );
};
