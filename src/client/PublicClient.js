import { Outlet } from "react-router-dom";
import { Login } from "../Screens";
import { getToken } from "./client-utils/utils";

export const PublicClient = () => {
  return getToken() ? <Outlet /> : <Login />;
};
