import { useNavigate } from 'react-router-dom';
import Button from 'components/shared/button/Button';
import { Navigation } from 'components/shared/navigation/Navigation';
import { Table } from 'components/leaderboard/table/Table';
import { ReactComponent as MenuIcon } from 'assets/returnMenu.svg';

import { MAIN_ROUTE } from 'container/routes/Constants';

import styles from './Leaderboard.module.scss';

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
          className={styles['return-to-main']}
        />
      </div>
    </div>
  );
};
