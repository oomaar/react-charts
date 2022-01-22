import React from 'react';
import { getToken } from '.';
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    return getToken() ? children : <Navigate replace to="/" />
};