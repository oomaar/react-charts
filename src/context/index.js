import { AuthProvider } from "./AuthContext";
import { AuthedClientProvider } from "./AuthedClientContext";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <AuthedClientProvider>{children}</AuthedClientProvider>
    </AuthProvider>
  );
}

export { AppProviders };
