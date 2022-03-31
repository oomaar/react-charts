import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import { Login } from "./Screens";

export const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<>Private Route</>}>
            <Route
              element={
                <div>
                  <Outlet />
                </div>
              }
            >
              <Route exact path={`/landing`} element={<p>Landing</p>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
