import './NavButton.module.scss';

export const NavButton = ({ buttonName, imageLink, onClickHandler }) => {
  const handleOnClick = () => onClickHandler?.();
  return (
    <button onClick={handleOnClick}>
      <img src={imageLink} alt='person connected' />
      {buttonName}
    </button>
  );
};
