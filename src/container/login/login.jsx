import Input from 'components/input/Input';
import MainButton from 'shared/components/button/Button';
import logo1 from 'assets/logo/logo1.png';
import logo2 from 'assets/logo/logo2.png';
import { ReactComponent as Thumb } from 'assets/thumb.svg';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/auth-context/AuthContainer';
import styles from './Login.module.scss';
import { MAIN_ROUTE } from 'container/routes/constants';

const Login = () => {
  const { isAuthenticated, setLogin } = useAuthContext();

  const navigate = useNavigate();
  const [isLenMaxed, setIsLenMaxed] = useState(false);
  const onChangeHandler = (e) => {
    if (e.target.value.length === 8) {
      setIsLenMaxed(true);
    } else {
      setIsLenMaxed(false);
    }
  };

  const onClickHandler = () => {
    if (isLenMaxed) {
      setLogin();
      navigate(MAIN_ROUTE);
    }
  };
  return (
    <div className={styles['main-login-container']}>
      <div className={styles['logo-container']}>
        <img src={logo1} alt='experios-logo' />
        <img src={logo2} alt='experios-logo' />
      </div>
      <div className={styles['glassyBg']}>
        <p className={styles['name']}>VIRTUAL ESCAPE</p>
        <p className={styles['desc']}>
          Enter your game code below to get started
        </p>
        <div>
          <Input placeholder={'Game Code'} onChangeHandler={onChangeHandler} />
          <div className={styles['align-button']}>
            <MainButton name='test connection' />

            <MainButton
              buttonType={'log-in'}
              name={'login'}
              rightImage={<Thumb />}
              className={`${isLenMaxed ? 'len-maxed' : ''}`}
              onClickHandler={onClickHandler}
            />
          </div>
        </div>
      </div>
      <div className={styles['footer']}>
        <p>Experios - Release v1.0.0</p>
      </div>
    </div>
  );
};

export default Login;
