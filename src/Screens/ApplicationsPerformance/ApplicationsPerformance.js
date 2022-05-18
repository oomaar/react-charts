import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  PerformanceContainer,
  TableContainer,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableBodyCell,
} from "./styledApplicationsPerformance";
import { TopCharts } from "../../components";
// import useFetchData from "../../hooks/useFetchData";

export const ApplicationsPerformance = () => {
  const [data, setData] = useState([]);
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
    <TableHeadCell key={i}>{heading}</TableHeadCell>
  ));

  return (
    <PerformanceContainer>
      <TopCharts data={data.slice(0, 4)} />
      <TableContainer>
        <Table>
          <TableHead>{tableHeadeings}</TableHead>
          <TableBody>
            {data.map((row, i) => {
              const ratio = row.failureCount / row.totalCount;
              const percentage = ratio * 100;

              return (
                <TableRow key={i}>
                  <TableBodyCell>{row.processName}</TableBodyCell>
                  <TableBodyCell>
                    {(row.totalCount / 3).toFixed(2)}
                  </TableBodyCell>
                  <TableBodyCell>{`${percentage.toFixed(2)}%`}</TableBodyCell>
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
      {/* <h1>TODO: Applications Perfromance Table (Table)</h1>
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
