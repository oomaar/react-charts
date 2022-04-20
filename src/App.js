import { ThemeProvider } from "styled-components";
import { useAuth } from "./context/AuthContext";
import { GlobalStyle } from "./Global";
import { theme } from "./Global/GlobalStyle";
import { UnAuthenticatedApp, AuthenticatedApp } from "./AuthComponents";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ApplicationsPerfromance } from "./Screens";

export const App = () => {
  const user = useAuth().user;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Router basename="/">
          {user === undefined ? (
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<UnAuthenticatedApp />} />
            </Routes>
          ) : (
            <Routes>
              <Route
                element={
                  <AuthenticatedApp>
                    <Outlet />
                  </AuthenticatedApp>
                }
              >
                <Route
                  path="/applications-performance"
                  element={<ApplicationsPerfromance />}
                />
                <Route
                  path="*"
                  element={<Navigate to="/applications-performance" />}
                />
              </Route>
            </Routes>
          )}
        </Router>
      </div>
    </ThemeProvider>
  );
};
