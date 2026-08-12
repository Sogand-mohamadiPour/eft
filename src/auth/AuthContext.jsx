import { createContext, useContext, useState } from "react";
import { getAuth, saveAuth, clearAuth } from "../utils/authStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => getAuth());

  const login = (authData) => {
    saveAuth(authData);
    setAuth(authData);
  };

  const logout = () => {
    clearAuth();
    setAuth(null);
  };

  const isAuthenticated = !!auth;

  return (
    <AuthContext.Provider
      value={{
        auth,
        user: auth,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
