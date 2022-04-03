import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import { Login, ApplicationsPerfromance } from "./Screens";
import { GlobalStyle } from "./Global";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route element={<>Private Route</>}> */}
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
            {/* </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
