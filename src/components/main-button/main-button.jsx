import './main-button.styles.scss';

const MainButton = ({ buttonType, name, image, className, onClickHandler }) => {
  const onClickHandle = () => {
    onClickHandler?.();
  };
  return (
    <button
      onClick={onClickHandle}
      className={`button-container ${
        buttonType === 'log-in' ? 'log-in' : 'base'
      } ${className}`}
    >
      {name} {image}
    </button>
  );
};

export default MainButton;
