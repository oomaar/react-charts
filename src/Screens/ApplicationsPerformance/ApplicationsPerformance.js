import axios from "axios";
import { useEffect, useState } from "react";
import { TopCharts } from "../../components";
import { useAuth } from "../../context/AuthContext";
import useFetchData from "../../hooks/useFetchData";
import { PerformanceContainer } from "./styledApplicationsPerformance";

export const ApplicationsPerformance = () => {
  // const [data, setData] = useState([]);

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

  const { data, error, loading } = useFetchData(
    "https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance"
  );
  console.log(
    "🚀 ~ file: ApplicationsPerformance.js ~ line 12 ~ ApplicationsPerformance ~ data",
    data
  );

  return (
    <PerformanceContainer>
      {/* <TopCharts data={data.slice(0, 4)} /> */}
      <h1>TODO: Applications Perfromance Table (Table)</h1>
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
      <h1>TODO: Applications Perfromance Failures Modal (Table)</h1>
    </PerformanceContainer>
  );
};
