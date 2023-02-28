import { useState, useContext, useEffect } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';

const AuthContextContainer = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [gameCode, setGameCode] = useState();
  useEffect(() => {
    setIsAuthenticated(
      JSON.parse(localStorage.getItem('isAuthenticated')) ?? false
    );
  }, [isAuthenticated]);

  const setLogin = (token) => {
    if (!token.status) {
      localStorage.setItem('token', JSON.stringify(token));
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    }
  };

  const setLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
  };

  const value = {
    isAuthenticated,
    gameCode,
    setIsAuthenticated,
    setLogin,
    setLogout,
    setGameCode,
  };

  return <AuthProvider value={value}>{children}</AuthProvider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextContainer;
