import login from 'assets/login.png';
import connected from 'assets/connected.png';
import { NavButton } from 'components/nav-button/nav-button';
import { Navigation } from 'container/navigation/navigation';
import { CardList } from 'components/card-list/card-list';
import styles from './mainMenu.module.scss';
import { useAuthContext } from 'context/AuthContainer';

const MainMenu = () => {
  const { isAuthenticated } = useAuthContext();
  console.log(isAuthenticated);
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
