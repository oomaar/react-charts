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
  TableAdjustHieghtContainer,
  ModalContainer,
  ModalTitle,
  ModalBackDrop,
  ModalContentContainer,
} from "./styledApplicationsPerformance";
import { TopCharts } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import { useSortableData } from "../../hooks/useSortedData";
import { TableSearch } from "../../components/TableComponents/TableSearch/TableSearch";
import { TablePagination } from "../../components/TableComponents/TablePagination/TablePagination";
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
          <TablePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            displayNumberOfEntriesPerPage={displayNumberOfEntriesPerPage}
            numberOfPages={numberOfPages}
            totalRowsCount={totalRowsCount}
          />
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
