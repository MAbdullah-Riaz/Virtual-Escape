import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/auth-context/AuthContainer';
import { LOGIN_ROUTE } from 'container/routes/ConstantsZX';
const PrivateRoutes = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoutes;
