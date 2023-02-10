import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/auth-context/AuthContainer';
import { MAIN_ROUTE } from './Constants';
const PrivateRoutes = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? (
    <Outlet />
  ) : !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={MAIN_ROUTE} />
  );
};

export default PrivateRoutes;
