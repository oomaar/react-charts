import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
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
} from "./styledApplicationsPerformance";
import { TopCharts } from "../../components";
// import useFetchData from "../../hooks/useFetchData";

export const ApplicationsPerformance = () => {
  const [data, setData] = useState([]);

  // Table Search
  const [searchTerm, setSearchTerm] = useState("");

  console.log(
    "🚀 ~ file: ApplicationsPerformance.js ~ line 18 ~ ApplicationsPerformance ~ data",
    data
  );

  const userToken = useAuth().user.token;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance`,
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      setData(response.data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <TableSearchContainer>
            <TableEntriesContainer>
              <span>Show</span>
              <TableEntriesDropDown>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
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
          <Table>
            <TableHead>
              <TableHeadRow>{tableHeadeings}</TableHeadRow>
            </TableHead>
            <TableBody>
              {data
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
                        <i className="bx bxs-file-doc" />
                      </TableBodyCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/*
      <h1>
      TODO: Applications Perfromance Table (Table): Download Excel & PDF
      </h1>
      <h1>
      TODO: Applications Perfromance Table (Table): List TD(s) with details
        col.
        </h1>
        <h1>TODO: Applications Perfromance Table (Table): pagination & Search</h1>

      <h1>TODO: Applications Perfromance Modal (Tabbed Container)</h1>
      <h1>TODO: Applications Perfromance Devices Modal (Table)</h1>
      <h1>TODO: Applications Perfromance Failures Modal (Table)</h1> */}
    </PerformanceContainer>
  );
};
