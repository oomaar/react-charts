// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { range } from "lodash";
import {
  PerformanceContainer,
  TableHeadCell,
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

  return (
    <PerformanceContainer>
      <TopCharts data={data.slice(0, 4)} />
      <Table columns={columns} data={data} />
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
