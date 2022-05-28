import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default class AuthedClient {
  userToken = useAuth().user.token;

  constructor(token) {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(
      (config) => {
        if (config.headers === undefined) {
          config.headers = {};
        }

        if (config.headers.Authorization === undefined) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  buildFiltersQueryParam(fromDate, toDate, group, user) {
    const from = fromDate.toISODate();
    const to = toDate.toISODate();

    let queryParam = `?from=${from}&to=${to}`;

    if (group !== 0) {
      queryParam = queryParam + `&groupId=${group}`;
    }

    if (user !== undefined) {
      queryParam = queryParam + `&computerId=${user}`;
    }

    return queryParam;
  }

  // Filters
  async getAllUsers() {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/User/GetUsersSummary`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }

  // Applications Performance
  async getProcessPerformance(startDate, endData, user, group) {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }

  async getFaliuresPerformance(title) {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessFailureRecords?ProcessName=${title}`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }

  async getDevicesPerformance(title) {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessDevicesList?ProcessName=${title}`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }
}
