import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/input/Input';
import Button from 'shared/components/button/Button';
import ExperiousLogo from 'assets/logo/logo1.png';
import VirtualEscapeLogo from 'assets/logo/logo2.png';
import { useAuthContext } from 'context/auth-context/AuthContainer';
import { ReactComponent as ThumbIcon } from 'assets/thumb.svg';
import { MAIN_ROUTE } from 'container/routes/ConstantsZX';
import styles from './Login.module.scss';

const LogIn = () => {
  const { setLogin } = useAuthContext();

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
        <img src={ExperiousLogo} alt='experios-logo' />
        <img src={VirtualEscapeLogo} alt='experios-logo' />
      </div>
      <div className={styles['glassyBg']}>
        <p className={styles['name']}>VIRTUAL ESCAPE</p>
        <p className={styles['desc']}>
          Enter your game code below to get started
        </p>
        <div>
          <Input placeholder={'Game Code'} onChangeHandler={onChangeHandler} />
          <div className={styles['align-button']}>
            <Button name='test connection' />

            <Button
              buttonType={'log-in'}
              name={'login'}
              rightImage={<ThumbIcon />}
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

export default LogIn;
