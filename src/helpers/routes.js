import { Outlet } from "react-router-dom";
import { useAuthListner } from "../hooks";
import { Login } from "../Pages";

export const PrivateRoute = () => {
    const { user } = useAuthListner();
    return user ? <Outlet /> : <Login />;
};