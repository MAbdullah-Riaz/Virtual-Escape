import styles from './Button.module.scss';

const Button = ({
  buttonType,
  name,
  rightImage,
  leftImage,
  className,
  disabled,
  onClickHandler,
}) => {
  const onClickHandle = () => {
    onClickHandler?.();
  };
  return (
    <button
      onClick={onClickHandle}
      className={`${styles['button-container']} ${className} `}
      disabled={disabled}
    >
      {leftImage && leftImage} {name} {rightImage && rightImage}
    </button>
  );
};

export default Button;
