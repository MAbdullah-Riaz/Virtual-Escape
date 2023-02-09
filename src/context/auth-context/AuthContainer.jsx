import { useState, useContext } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';
import { defaultAuthContext } from './AuthInterface';
import { useNavigate } from 'react-router-dom';

const AuthContextContainer = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const setLogin = () => {
    setIsAuthenticated(true);
  };

  const setLogout = () => setIsAuthenticated(false);
  const value = { isAuthenticated, setIsAuthenticated, setLogin, setLogout };
  return <AuthProvider value={value}>{children}</AuthProvider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextContainer;
