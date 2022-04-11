import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import React from "react";
import { Login, ApplicationsPerfromance } from "./Screens";
import { GlobalStyle } from "./Global";
import { Layout } from "./Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "./Global/GlobalStyle";
import { PublicClient } from "./client/PublicClient";
import { getToken } from "./client/client-utils/utils";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename="/">
        {getToken() ? (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route element={<PublicClient />}>
              <Route
                element={
                  <Layout>
                    <Outlet />
                  </Layout>
                }
              >
                <Route
                  exact
                  path={`/applications-performance`}
                  element={<ApplicationsPerfromance />}
                />
              </Route>
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
};
