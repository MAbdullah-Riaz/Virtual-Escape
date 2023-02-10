import styles from './LeaderBoard.module.scss';
import { Navigation } from 'container/navigation/Navigation';
import { Table } from 'shared/components/table/Table';
import { useNavigate } from 'react-router-dom';
import MainButton from 'shared/components/button/Button';
import { ReactComponent as MenuIcon } from 'assets/returnMenu.svg';
import { ReactComponent as Thumb } from 'assets/thumb.svg';
import { MAIN_ROUTE } from 'container/routes/Constants';
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
        <MainButton
          name='RETURN TO MAIN MENU'
          onClickHandler={onClickHandler}
          leftImage={<MenuIcon />}
          className='return-to-main'
        />
      </div>
    </div>
  );
};
