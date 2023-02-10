import { Route, Routes as BrowserRouter } from 'react-router-dom';
import { Leaderboard } from 'container/leaderboard/LeaderboardZX';
import LogIn from 'container/login/LogInZX';
import MainMenu from 'container/main-menu/MainMenuZX';
import PrivateRoutes from 'container/routes/PrivateRoutes';

import {
  MAIN_ROUTE,
  LEADERBOARD_ROUTE,
  LOGIN_ROUTE,
} from 'container/routes/Constants';

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
