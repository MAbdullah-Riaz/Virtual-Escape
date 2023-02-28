import { Navigation } from 'components/shared/navigation/Navigation';
import { CardList } from 'components/main-menu/card-list/CardList';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <div className={styles['main-container']}>
      <Navigation />
      <div className={styles['names']}>
        <p>VIRTUAL ESCAPE PRESENTS</p>
        <h1>TIME'S TICKING JR</h1>
      </div>
      <CardList />
    </div>
  );
};

export default MainMenu;
