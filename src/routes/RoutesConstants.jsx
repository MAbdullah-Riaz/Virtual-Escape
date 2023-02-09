import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'routes/PrivateRoutes';
import { Leaderboard } from 'container/leaderboard/leaderboard';
import Login from 'container/login/login';
import MainMenu from 'container/main-menu/mainMenu';
export const RoutesConstants = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/mainMenu' element={<MainMenu />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Route>
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
};
