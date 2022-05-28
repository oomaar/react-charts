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

  async getProcessPerformance() {
    const response = await axios.get(
      `https://flyworex.azurewebsites.net/api/ProcessesPerformance/GetProcessesPerformance`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );

    return response.data;
  }
}
