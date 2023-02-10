import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/button/ButtonZX';
import { Navigation } from 'container/navigation/NavigationZX';
import { Table } from 'shared/components/table/TableZX';
import { ReactComponent as MenuIcon } from 'assets/returnMenu.svg';

import { MAIN_ROUTE } from 'container/routes/Constants';

import styles from './LeaderBoard.module.scss';

export const Leaderboard = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(MAIN_ROUTE);
  };
  return (
    <div className={styles['main-container']}>
      <Navigation />
      <div className={styles['glassyBg']}>
        <p className={styles['heading']}>GAME: TIME'S TICKING</p>
        <div className={styles['main-table']}>
          <Table />
        </div>
        <Button
          name='RETURN TO MAIN MENU'
          onClickHandler={onClickHandler}
          leftImage={<MenuIcon />}
          className='return-to-main'
        />
      </div>
    </div>
  );
};
