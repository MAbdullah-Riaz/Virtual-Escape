import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'components/shared/navigation/Navigation';
import Input from 'components/shared/input/Input';
import Button from 'components/shared/button/Button';
import ExperiousLogo from 'assets/logo/logo1.png';
import VirtualEscapeLogo from 'assets/logo/logo2.png';
import { useAuthContext } from 'context/auth-context/AuthContainer';
import { ReactComponent as ThumbIcon } from 'assets/thumb.svg';
import { MAIN_ROUTE } from 'container/routes/Constants';
import styles from './Login.module.scss';
import { getResponse, checkServerStatus } from '../../axios/axios';
const LogIn = () => {
  const { setLogin, isAuthenticated, setGameCode, gameCode } = useAuthContext();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const onChangeHandler = (e) => {
    if (e.target.value.length === 8) {
      setGameCode(e.target.value);
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(MAIN_ROUTE);
    }
  }, [isAuthenticated]);

  const testConnectionHandler = async () => {
    checkServerStatus();
  };

  const loginClickHandler = async () => {
    if (!disable) {
      const token = await getResponse(gameCode);
      setLogin(token);
    }
  };

  return (
    <div className={styles['main-login-container']}>
      <Navigation logoOnlyRender={false} />

      <div className={styles['glassyBg']}>
        <p className={styles['name']}>VIRTUAL ESCAPE</p>
        <p className={styles['desc']}>
          Enter your game code below to get started
        </p>
        <div>
          <Input placeholder={'Game Code'} onChangeHandler={onChangeHandler} />
          <div className={styles['align-button']}>
            <Button
              name='test connection'
              onClickHandler={testConnectionHandler}
            />

            <Button
              buttonType={'log-in'}
              name={'login'}
              rightImage={<ThumbIcon />}
              disable={disable}
              className={styles['login']}
              onClickHandler={loginClickHandler}
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

export default LogIn;
