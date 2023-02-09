import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'container/routes/PrivateRoutes';
import { Leaderboard } from 'container/leaderboard/Leaderboard';
import Login from 'container/login/Login';
import MainMenu from 'container/main-menu/MainMenu';
export const RoutesConstants = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route index path='/' element={<MainMenu />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};
