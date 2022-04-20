import { AuthProvider } from "./AuthContext";

function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProviders };
