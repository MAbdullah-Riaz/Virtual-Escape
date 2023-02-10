import { Route, Routes as BrowserRouter } from 'react-router-dom';
import { Leaderboard } from 'container/leaderboard/Leaderboard';
import LogIn from 'container/login/Login';
import MainMenu from 'container/main-menu/MainMenu';
import PrivateRoutes from 'container/routes/PrivateRoutes';

import {
  MAIN_ROUTE,
  LEADERBOARD_ROUTE,
  LOGIN_ROUTE,
} from 'container/routes/ConstantsZX';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route element={<PrivateRoutes />}>
        <Route path={LEADERBOARD_ROUTE} element={<Leaderboard />} />
        <Route index path={MAIN_ROUTE} element={<MainMenu />} />
      </Route>
      <Route path={LOGIN_ROUTE} element={<LogIn />} />
    </BrowserRouter>
  );
};
