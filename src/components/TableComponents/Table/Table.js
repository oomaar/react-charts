import { range } from "lodash";
import { useState } from "react";
import { TablePagination, TableSearch } from "../";
import { useSortableData } from "../../../hooks/useSortedData";
import {
  TableAdjustHieghtContainer,
  TableBody,
  TableBodyCell,
  TableContainer,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableTable,
} from "./styledTable";

export const Table = ({ data, columns, rows }) => {
  const {
    items: sortedSearchedRowsData,
    requestSort,
    sortConfig,
  } = useSortableData(data);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRowsPerPage, setTableRowsPerPage] = useState(10);
  const indexOfLastPost = currentPage * tableRowsPerPage;
  const indexOfFirstPost = indexOfLastPost - tableRowsPerPage;
  const totalRowsCount = data.length;
  const currentPageRowsData = sortedSearchedRowsData.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const numberOfPages = range(
    1,
    Math.ceil(totalRowsCount / tableRowsPerPage) + 1
  );

  const displayNumberOfEntriesPerPage = () => {
    if (currentPage === numberOfPages.length) {
      if (totalRowsCount % tableRowsPerPage === 0) {
        return tableRowsPerPage;
      } else {
        return totalRowsCount % tableRowsPerPage;
      }
    } else if (totalRowsCount === 0) {
      return 0;
    } else {
      return tableRowsPerPage;
    }
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const tableHeadings = columns.map((column, index) => {
    return (
      <TableHeadCell
        key={index}
        className={`${column.name === "Details" ? "details" : ""
          } ${getClassNamesFor(column.attr)}`}
        style={column.style}
        onClick={
          column.attr === ""
            ? () => { }
            : () => {
              requestSort(column.attr);
            }
        }
      >
        {column.name}
      </TableHeadCell>
    );
  });

  const serchedTableData = currentPageRowsData.filter((term) => {
    if (searchTerm === "") {
      return term;
    } else if (
      term.processName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return term;
    }
    return 0;
  });

  return (
    <TableContainer>
      {/* Search */}
      <TableSearch
        data={data}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setTableRowsPerPage={setTableRowsPerPage}
      />
      {/* Table */}
      <TableAdjustHieghtContainer
        displayNumberOfEntriesPerPage={displayNumberOfEntriesPerPage}
      >
        <TableTable>
          <TableHead>
            <TableHeadRow>{tableHeadings}</TableHeadRow>
          </TableHead>
          <TableBody>
            {rows(serchedTableData)}
          </TableBody>
        </TableTable>
      </TableAdjustHieghtContainer>
      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        displayNumberOfEntriesPerPage={displayNumberOfEntriesPerPage}
        numberOfPages={numberOfPages}
        totalRowsCount={totalRowsCount}
      />
    </TableContainer>
  );
};
