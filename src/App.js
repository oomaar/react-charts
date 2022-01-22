import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Landing, Login, Signup } from "./Pages";
import { PrivateRoute } from "./helpers/routes";
import { Layout } from "./Global";
import React from "react";

export const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Login title="Login" subTitle="Enter your email and password" />} />
          <Route exact path="/signup" element={<Signup title="Signup" subTitle="Create account" />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout><Outlet /></Layout>}>
              <Route exact path={`/landing`} element={<Landing />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};