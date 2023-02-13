import { useState, useContext, useEffect } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';

const AuthContextContainer = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    setIsAuthenticated(
      JSON.parse(localStorage.getItem('isAuthenticated')) ?? false
    );
  }, [isAuthenticated]);

  const setLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    localStorage.setItem('token', JSON.stringify(token));
  };

  const setLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
  };

  const value = { isAuthenticated, setIsAuthenticated, setLogin, setLogout };

  return <AuthProvider value={value}>{children}</AuthProvider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextContainer;
