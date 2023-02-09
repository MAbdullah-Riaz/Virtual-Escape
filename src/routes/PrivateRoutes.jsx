import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContainer';
import { useContext } from 'react';

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuthContext();
  console.log('authenticated', isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
