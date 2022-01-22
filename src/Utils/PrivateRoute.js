import React from 'react';
import { Route } from 'react-router-dom';
import { getToken } from '.';

export const PrivateRoute = ({ navigate, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => !getToken() ? <Component {...props} /> : navigate("/")}
        />
    );
};
