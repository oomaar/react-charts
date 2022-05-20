// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { range } from "lodash";
import {
  PerformanceContainer,
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableRow,
  TableBodyCell,
  TableContainer,
  // Search
  TableSearchContainer,
  TableEntriesContainer,
  TableEntriesDropDown,
  TableSearchInputContainer,
  TableSearchInput,
  TableButtonsContainer,
  TableDownloadButton,
  // Pagination
  TablePaginationContaier,
  TablePaginationButton,
  TableAdjustHieghtContainer,
  ModalContainer,
  ModalTitle,
  ModalBackDrop,
  ModalContentContainer,
} from "./styledApplicationsPerformance";
import { TopCharts } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import { useSortableData } from "../../hooks/useSortedData";
// import useFetchData from "../../hooks/useFetchData";

export const ApplicationsPerformance = () => {
  // const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchedData = useFetchData(
    "https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance"
  );

  const data = fetchedData.data;
  const {
    items: sortedSearchedRowsData,
    requestSort,
    sortConfig,
  } = useSortableData(data);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const columns = [
    {
      name: "Application Name",
      attr: "processName",
    },
    {
      name: "Duration (Minutes)",
      attr: "totalCount",
    },
    {
      name: "Failure Percentage",
      attr: "percentage",
    },
    {
      name: "Number of Devices",
      attr: "computersCount",
    },
    {
      name: "Details",
      attr: "",
    },
  ];

  const tableHeadings = columns.map((column, index) => {
    return (
      <TableHeadCell
        key={index}
        className={`${getClassNamesFor(column.attr)}`}
        style={column.style}
        onClick={
          column.attr === ""
            ? () => {}
            : () => {
                requestSort(column.attr);
                console.log("I'm Clicked");
              }
        }
      >
        {column.name}
      </TableHeadCell>
    );
  });

  // Table Search
  const [searchTerm, setSearchTerm] = useState("");

  // Table Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRowsPerPage, setTableRowsPerPage] = useState(10);
  const visibleCount = 5;
  const indexOfLastPost = currentPage * tableRowsPerPage;
  const indexOfFirstPost = indexOfLastPost - tableRowsPerPage;
  const totalRowsCount = data.length;
  const numberOfPages = range(
    1,
    Math.ceil(totalRowsCount / tableRowsPerPage) + 1
  );

  const getSliceStart = () => {
    if (range(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
      return numberOfPages[0] - 1;
    } else if (
      range(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(currentPage)
    ) {
      return numberOfPages[numberOfPages.length - 1 - visibleCount];
    } else {
      return currentPage - Math.ceil(visibleCount / 2);
    }
  };

  const getSliceEnd = () => {
    if (
      range(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(currentPage)
    ) {
      return numberOfPages[numberOfPages.length - 1];
    } else if (range(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
      return visibleCount;
    } else {
      return currentPage + Math.floor(visibleCount / 2);
    }
  };

  const currentPageRowsData = sortedSearchedRowsData.slice(
    indexOfFirstPost,
    indexOfLastPost
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
  // Table Pagination

  // const userToken = useAuth().user.token;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance`,
  //       { headers: { Authorization: `Bearer ${userToken}` } }
  //     );
  //     setData(response.data);
  //   };
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const { data, error, loading } = useFetchData(
  //   "https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance"
  // );
  // console.log(
  //   "🚀 ~ file: ApplicationsPerformance.js ~ line 28 ~ ApplicationsPerformance ~ data",
  //   data
  // );

  const headings = [
    "Application Name",
    "Duration (Minutes)",
    "Failure Percentage",
    "Number of Devices",
    "Details",
  ];

  const tableHeadeings = headings.map((heading, i) => (
    <TableHeadCell
      key={i}
      className={`${heading === "Details" ? "details" : ""}`}
    >
      {heading}
    </TableHeadCell>
  ));

  return (
    <PerformanceContainer>
      <TopCharts data={data.slice(0, 4)} />
      <div>
        <TableContainer>
          {/* Search */}
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
          {/* Table */}
          <TableAdjustHieghtContainer
            displayNumberOfEntriesPerPage={displayNumberOfEntriesPerPage}
          >
            <Table>
              <TableHead>
                <TableHeadRow>{tableHeadings}</TableHeadRow>
              </TableHead>
              <TableBody>
                {currentPageRowsData
                  .filter((term) => {
                    if (searchTerm === "") {
                      return term;
                    } else if (
                      term.processName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return term;
                    }
                    return 0;
                  })
                  .map((row, i) => {
                    const ratio = row.failureCount / row.totalCount;
                    const percentage = ratio * 100;

                    return (
                      <TableRow key={i}>
                        <TableBodyCell>{row.processName}</TableBodyCell>
                        <TableBodyCell>
                          {(row.totalCount / 3).toFixed(2)}
                        </TableBodyCell>
                        <TableBodyCell>{`${percentage.toFixed(
                          2
                        )}%`}</TableBodyCell>
                        <TableBodyCell>{row.computersCount}</TableBodyCell>
                        <TableBodyCell>
                          <i
                            className="bx bxs-file-doc"
                            onClick={() => setShowModal(true)}
                          />
                        </TableBodyCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableAdjustHieghtContainer>
          {/* Pagination */}
          <TablePaginationContaier>
            <div>
              Showing {totalRowsCount === 0 ? "0" : "1"} to{" "}
              {displayNumberOfEntriesPerPage()} of {totalRowsCount} entries
            </div>
            <div>
              <TablePaginationButton
                onClick={() =>
                  setCurrentPage(
                    currentPage > 1 ? currentPage - 1 : currentPage
                  )
                }
              >
                Prev
              </TablePaginationButton>
              {currentPage > visibleCount - 2 && (
                <TablePaginationButton
                  onClick={() =>
                    setCurrentPage(
                      currentPage - visibleCount > 0
                        ? currentPage - visibleCount
                        : 1
                    )
                  }
                >
                  ...
                </TablePaginationButton>
              )}
              {numberOfPages
                .slice(getSliceStart(), getSliceEnd())
                .map((number, i) => (
                  <TablePaginationButton
                    key={i}
                    className={`${currentPage === number ? "active" : ""}`}
                    onClick={() => setCurrentPage(number)}
                  >
                    {number}
                  </TablePaginationButton>
                ))}
              {currentPage <
                numberOfPages[numberOfPages.length - 1] -
                  Math.floor(visibleCount / 2) && (
                <TablePaginationButton
                  onClick={() => {
                    setCurrentPage(
                      currentPage + visibleCount <= numberOfPages.length
                        ? numberOfPages[currentPage + visibleCount - 1]
                        : numberOfPages[numberOfPages.length - 1]
                    );
                  }}
                >
                  ...
                </TablePaginationButton>
              )}
              <TablePaginationButton
                onClick={() =>
                  setCurrentPage(
                    currentPage < numberOfPages.length
                      ? currentPage + 1
                      : currentPage
                  )
                }
              >
                Next
              </TablePaginationButton>
            </div>
          </TablePaginationContaier>
        </TableContainer>
      </div>
      {/* Modal */}
      <ModalContainer showModal={showModal}>
        <ModalBackDrop
          showModal={showModal}
          onClick={() => setShowModal(false)}
        />
        <ModalContentContainer>
          <ModalTitle>Modal</ModalTitle>
        </ModalContentContainer>
      </ModalContainer>

      {/*
      <h1>TODO: Applications Perfromance Modal (Tabbed Container)</h1>
      <h1>TODO: Applications Perfromance Devices Modal (Table)</h1>
      <h1>TODO: Applications Perfromance Failures Modal (Table)</h1> */}
    </PerformanceContainer>
  );
};
