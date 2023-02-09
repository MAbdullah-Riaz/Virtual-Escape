import styles from './leaderboard.module.scss';
import { Navigation } from '../navigation/navigation';
import { ReturnButton } from '../../components/return-button/return-button';
import { Table } from '../../shared/components/table/table';
import { useNavigate } from 'react-router-dom';

export const Leaderboard = () => {
  const navigate = useNavigate();

  const onClickhandler = () => {
    navigate('/mainMenu');
  };
  return (
    <div className={styles['main-container']}>
      <Navigation />
      <div className={styles['glassyBg']}>
        <p className={styles['heading']}>GAME: TIME'S TICKING</p>
        <div className={styles['main-table']}>
          <Table />
        </div>

        <ReturnButton
          returnButtonName={'RETURN TO MAIN MENU'}
          onClickhandler={onClickhandler}
        />
      </div>
    </div>
  );
};
