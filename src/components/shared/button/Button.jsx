import styles from './Button.module.scss';

const Button = ({
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
      {leftImage && leftImage} {name} {rightImage && rightImage}
    </button>
  );
};

export default Button;
