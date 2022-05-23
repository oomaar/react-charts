import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { Table } from "../../TableComponents";
import { TableBodyCell } from "../../TableComponents/Table/styledTable";
import {
  ModalBackDrop,
  ModalBody,
  ModalContainer,
  ModalContentContainer,
  ModalHeader,
  ModalNav,
  ModalNavButton,
  ModalTitle,
} from "./styledModal";

export const Modal = ({ showModal, setShowModal, modalTitle }) => {
  const [activeTab, setActiveTab] = useState("devices");

  // Faliures Table
  const fetchedData = useFetchData(
    `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessFailureRecords?ProcessName=${modalTitle}`
  );
  const data = fetchedData.data;

  const columns = [
    {
      name: "Username",
      attr: "computerName",
    },
    {
      name: "Timestamp",
      attr: "sampleTime",
    },
  ];

  const rows = (array) => {
    const sortingArray = array.map((el) => ({
      computerName: el.computerName,
      sampleTime: el.sampleTime,
    }));

    return sortingArray.map((application, index) => (
      <tr key={index}>
        <TableBodyCell>{application.computerName}</TableBodyCell>
        <TableBodyCell>{application.sampleTime}</TableBodyCell>
      </tr>
    ));
  };

  const rowStrings = data.map((application) => [application.computerName]);

  // Devices Table
  const fetchedDeivcesData = useFetchData(
    `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessDevicesList?ProcessName=${modalTitle}`
  );
  const devicesData = fetchedDeivcesData.data;

  const devicesColumns = [
    {
      name: "Username",
      attr: "computerName",
    },
  ];

  const devicesRows = (array) => {
    const sortingArray = array.map((el) => ({
      computerName: el.computerName,
    }));

    return sortingArray.map((application, index) => (
      <tr key={index}>
        <TableBodyCell>{application.computerName}</TableBodyCell>
      </tr>
    ));
  };

  const devicesRowStrings = devicesData.map((application) => [
    application.computerName,
  ]);

  return (
    <ModalContainer showModal={showModal}>
      <ModalBackDrop
        showModal={showModal}
        onClick={() => setShowModal(false)}
      />
      <ModalContentContainer>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalNav>
            <ModalNavButton onClick={() => setActiveTab("devices")}>
              Devices
            </ModalNavButton>
            <ModalNavButton onClick={() => setActiveTab("failures")}>
              Failures
            </ModalNavButton>
          </ModalNav>
          {activeTab === "failures" ? (
            <Table
              columns={columns}
              data={data}
              rows={rows}
              rowStrings={rowStrings}
            />
          ) : activeTab === "devices" ? (
            <Table
              columns={devicesColumns}
              data={devicesData}
              rows={devicesRows}
              rowStrings={devicesRowStrings}
            />
          ) : (
            <></>
          )}
        </ModalBody>
      </ModalContentContainer>
    </ModalContainer>
  );
};
