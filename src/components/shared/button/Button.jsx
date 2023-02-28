import styles from './Button.module.scss';

const Button = ({
  buttonType,
  name,
  rightImage,
  leftImage,
  className,
  disable,
  onClickHandler,
}) => {
  const onClickHandle = () => {
    onClickHandler?.();
  };
  return (
    <button
      onClick={onClickHandle}
      disabled={disable}
      className={`${styles['button-container']} ${className} `}
    >
      {leftImage && leftImage} {name} {rightImage && rightImage}
    </button>
  );
};

export default Button;
