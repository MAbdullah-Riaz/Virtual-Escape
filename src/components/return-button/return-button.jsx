import styles from './return-button.module.scss';
import returnMenu from '../../assets/returnMenu.svg';
export const ReturnButton = ({ returnButtonName, onClickhandler }) => {
  const handleOnClick = () => {
    onClickhandler?.();
  };
  return (
    <button className={styles['return-button']} onClick={handleOnClick}>
      <img className={styles['padding']} src={returnMenu} alt='back' />
      {returnButtonName}
    </button>
  );
};
