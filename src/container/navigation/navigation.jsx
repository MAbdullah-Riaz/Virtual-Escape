import logo1 from 'assets/logo/logo1.png';
import logo2 from 'assets/logo/logo2.png';
import login from 'container/login/login';
import connected from 'assets/connected.png';
import { NavButton } from 'components/nav-button/nav-button';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContainer';
import './navigation.styles.scss';

export const Navigation = () => {
  const navigate = useNavigate();
  const { setLogout } = useAuthContext();
  const onClickHandler = (navigateString) => {
    setLogout();
    navigate(navigateString);
  };

  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo1} alt='experios logo' />
        <img src={logo2} alt='virtual escape logo' />
      </div>
      <div className='icon'>
        <i className='fas fa-bars'></i>
      </div>

      <div className='pages'>
        <NavButton buttonName={'6 CONNECTED'} imageLink={connected} />
        <NavButton
          buttonName={'LOG OUT'}
          imageLink={connected}
          onClickHandler={() => onClickHandler('/')}
        />
      </div>
    </div>
  );
};
