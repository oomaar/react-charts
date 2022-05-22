// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { range } from "lodash";
import {
  PerformanceContainer,
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
import { Table } from "../../components";
import { TableBodyCell } from "../../components/TableComponents/Table/styledTable";
// import useFetchData from "../../hooks/useFetchData";

export const ApplicationsPerformance = () => {
  // const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchedData = useFetchData(
    "https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance"
  );

  const data = fetchedData.data;

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
      attr: "failureCount",
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

  // const rows = data.map((row, i) => {
  //   const ratio = row.failureCount / row.totalCount;
  //   const percentage = ratio * 100;

  //   return (
  //     <TableRow key={i}>
  //       <TableBodyCell>{row.processName}</TableBodyCell>
  //       <TableBodyCell>
  //         {(row.totalCount / 3).toFixed(2)}
  //       </TableBodyCell>
  //       <TableBodyCell>{`${percentage.toFixed(2)}%`}</TableBodyCell>
  //       <TableBodyCell>{row.computersCount}</TableBodyCell>
  //       <TableBodyCell>
  //         <i
  //           className="bx bxs-file-doc"
  //           onClick={() => setShowModal(true)}
  //         />
  //       </TableBodyCell>
  //     </TableRow>
  //   )
  // });

  function calculatePercentage(process) {
    const ratio = process.failureCount / process.totalCount;
    const percentage = ratio * 100;

    return Math.round((percentage + Number.EPSILON) * 1000) / 1000;
  }

  const rows = (array) => {
    const sortingArray = array.map(el => ({
      processName: el.processName,
      totalCount: el.totalCount,
      failPercentage: calculatePercentage(el),
      computersCount: el.computersCount,
    }));

    return sortingArray.map((application, index) => (
      <tr key={index}>
        <TableBodyCell>{application.processName}</TableBodyCell>
        <TableBodyCell>
          {(application.totalCount / 3).toFixed(2)}
        </TableBodyCell>
        <TableBodyCell>{`${application.failPercentage}%`}</TableBodyCell>
        <TableBodyCell>{application.computersCount}</TableBodyCell>
        <TableBodyCell>
          <i
            className="bx bxs-file-doc"
            onClick={() => setShowModal(true)}
          />
        </TableBodyCell>
      </tr>
    ));
  };

  const rowStrings = data.map((application) => [
    application.processName,
  ]);

  return (
    <PerformanceContainer>
      <TopCharts data={data.slice(0, 4)} />
      <Table columns={columns} data={data} rows={rows} rowStrings={rowStrings} />
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
