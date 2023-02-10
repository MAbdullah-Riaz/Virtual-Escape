import { useState, useContext } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';
import { defaultAuthContext } from './AuthInterface';
import { useNavigate } from 'react-router-dom';

const AuthContextContainer = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('isAuthenticated')) ?? false
  );
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
