import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'container/routes/PrivateRoutes';
import { Leaderboard } from 'container/leaderboard/Leaderboard';
import Login from 'container/login/Login';
import MainMenu from 'container/main-menu/MainMenu';
import {
  MAIN_ROUTE,
  LEADERBOARD_ROUTE,
  LOGIN_ROUTE,
} from 'container/routes/constants';
export const RoutesConstants = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={LEADERBOARD_ROUTE} element={<Leaderboard />} />
          <Route index path={MAIN_ROUTE} element={<MainMenu />} />
        </Route>
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Routes>
    </div>
  );
};
