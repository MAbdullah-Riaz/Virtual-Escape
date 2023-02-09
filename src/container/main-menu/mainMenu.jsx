import login from 'assets/login.png';
import connected from 'assets/connected.png';
import { NavButton } from 'components/nav-button/NavButton';
import { Navigation } from 'container/navigation/Navigation';
import { CardList } from 'components/card-list/CardList';
import styles from './MainMenu.module.scss';
import { useAuthContext } from 'context/auth-context/AuthContainer';

const MainMenu = () => {
  const { isAuthenticated } = useAuthContext();
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
