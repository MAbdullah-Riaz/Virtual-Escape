import { useState, useContext, useEffect } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';

const AuthContextContainer = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    setIsAuthenticated(
      JSON.parse(localStorage.getItem('isAuthenticated')) ?? false
    );
  });

  const setLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  const setLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const value = { isAuthenticated, setIsAuthenticated, setLogin, setLogout };

  return <AuthProvider value={value}>{children}</AuthProvider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextContainer;
