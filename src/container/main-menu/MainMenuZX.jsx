import { Navigation } from 'container/navigation/NavigationZX';
import { CardList } from 'components/card-list/CardListZX';
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
