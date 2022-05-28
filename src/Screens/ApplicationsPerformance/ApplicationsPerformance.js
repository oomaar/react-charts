// @ts-nocheck
import { useEffect, useState } from "react";
import { PerformanceContainer } from "./styledApplicationsPerformance";
import { Modal, PageHeader, TopCharts } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import { Table } from "../../components";
import { TableBodyCell } from "../../components/TableComponents/Table/styledTable";
import AuthedClient from "../../client/AuthedClient";
import { useAuthedClient } from "../../context/AuthedClientContext";

export const ApplicationsPerformance = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const authedClient = useAuthedClient();

  const fetchedData = useFetchData(authedClient.getProcessPerformance());
  const data = fetchedData.data;

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

  function calculatePercentage(process) {
    const ratio = process.failureCount / process.totalCount;
    const percentage = ratio * 100;

    return Math.round((percentage + Number.EPSILON) * 1000) / 1000;
  }

  const rows = (array) => {
    const sortingArray = array.map((el) => ({
      processName: el.processName,
      totalCount: el.totalCount,
      failPercentage: calculatePercentage(el),
      computersCount: el.computersCount,
    }));

    return sortingArray.map((application, index) => (
      <tr key={index}>
        <TableBodyCell>{application.processName}</TableBodyCell>
        <TableBodyCell>{(application.totalCount / 3).toFixed(2)}</TableBodyCell>
        <TableBodyCell>{`${application.failPercentage}%`}</TableBodyCell>
        <TableBodyCell>{application.computersCount}</TableBodyCell>
        <TableBodyCell>
          <i
            className="bx bxs-file-doc"
            onClick={() => {
              setShowModal(true);
              setModalTitle(application.processName);
            }}
          />
        </TableBodyCell>
      </tr>
    ));
  };

  const rowStrings = data.map((application) => [application.processName]);

  return (
    <>
      <PageHeader title="Applications Performance" />
      <PerformanceContainer>
        <TopCharts data={data.slice(0, 4)} />
        <Table
          columns={columns}
          data={data}
          rows={rows}
          rowStrings={rowStrings}
        />
        {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={modalTitle}
      /> */}

        {/*
      <h1>TODO: Applications Perfromance Modal (Tabbed Container)</h1>
      <h1>TODO: Applications Perfromance Devices Modal (Table)</h1>
    <h1>TODO: Applications Perfromance Failures Modal (Table)</h1> */}
      </PerformanceContainer>
    </>
  );
};
