import styles from './Button.module.scss';

const MainButton = ({
  buttonType,
  name,
  rightImage,
  leftImage,
  className,
  onClickHandler,
}) => {
  const onClickHandle = () => {
    onClickHandler?.();
  };
  const buttonTypeClass = buttonType === 'log-in' ? 'log-in' : 'base';
  return (
    <button
      onClick={onClickHandle}
      className={`${styles['button-container']} ${styles[buttonTypeClass]} ${styles[className]} `}
    >
      {leftImage} {name} {rightImage}
    </button>
  );
};

export default MainButton;
