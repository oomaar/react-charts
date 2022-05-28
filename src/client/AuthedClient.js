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

  async getProcessPerformance(startDate, endData, user, group) {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }

  async getAllUsers() {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/User/GetUsersSummary`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }
}
