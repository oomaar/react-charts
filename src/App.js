import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages";

export const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path={`/`} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};