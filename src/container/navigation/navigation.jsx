import experiosLogo from 'assets/logo/logo1.png';
import virtualEscapeLogo from 'assets/logo/logo2.png';
import loginIcon from 'assets/login.png';
import connectedIcon from 'assets/connected.png';
import { NavButton } from 'components/nav-button/NavButton';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/auth-context/AuthContainer';
import { MAIN_ROUTE } from 'container/routes/constants';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const navigate = useNavigate();
  const { setLogout } = useAuthContext();
  const onClickHandler = (navigateString) => {
    setLogout();
    navigate(navigateString);
  };

  return (
    <div className={styles['nav']}>
      <div className={styles['logo']}>
        <img src={experiosLogo} alt='experios logo' />
        <img src={virtualEscapeLogo} alt='virtual escape logo' />
      </div>
      <div className={styles['icon']}>
        <i className='fas fa-bars'></i>
      </div>

      <div className={styles['pages']}>
        <NavButton buttonName={'6 CONNECTED'} imageLink={connectedIcon} />
        <NavButton
          buttonName={'LOG OUT'}
          imageLink={loginIcon}
          onClickHandler={() => onClickHandler(MAIN_ROUTE)}
        />
      </div>
    </div>
  );
};
