import Icon from 'components/shared/icon/Icon';
import styles from './Input.module.scss';

const Input = ({ placeholder, onChangeHandler }) => {
  return (
    <div className={styles['input-container']}>
      <input
        placeholder={placeholder}
        maxLength='8'
        onChange={onChangeHandler}
      />

      <Icon />
    </div>
  );
};

export default Input;
