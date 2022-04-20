import { createContext, useState, useContext } from "react";
import sendLoginResponse from "../client/login";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const userJson = localStorage.getItem("user");

  const [user, setUser] = useState(
    userJson === null ? undefined : JSON.parse(userJson)
  );

  const login = async (userName, password) => {
    const loginResponse = await sendLoginResponse(userName, password);

    const userObject = {
      userName,
      role: loginResponse.role,
      token: loginResponse.token,
      expiration: loginResponse.expiration,
    };

    localStorage.setItem("user", JSON.stringify(userObject));
    setUser(userObject);
  };

  const logout = () => {
    localStorage.clear();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be within an AuthProvider`);
  }
  return context;
}

export { useAuth, AuthProvider };
