import { createContext, useContext } from "react";
import AuthedClient from "../client/AuthedClient";
import { useAuth } from "./AuthContext";

const AuthedClientContext = createContext(undefined);

const AuthedClientProvider = ({ children }) => {
  const { user } = useAuth();
  const token = user?.token;

  const authedClient =
    token === undefined ? undefined : new AuthedClient(token);

  return (
    <AuthedClientContext.Provider value={authedClient}>
      {children}
    </AuthedClientContext.Provider>
  );
};

function useAuthedClient() {
  const context = useContext(AuthedClientContext);

  if (context === undefined) {
    throw new Error(`useAuthedClient must be used within a ClientProvider`);
  }

  return context;
}

export { AuthedClientProvider, useAuthedClient };
