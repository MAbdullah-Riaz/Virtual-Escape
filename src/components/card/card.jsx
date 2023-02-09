import './card.styles.scss';
import { useNavigate } from 'react-router-dom';
export const Card = ({ name, image, onClickNavigate }) => {
  const navigate = useNavigate();
  const onClickHandler = () =>
    onClickNavigate ? navigate(onClickNavigate) : null;

  return (
    <div className={`card-container `} onClick={onClickHandler}>
      <img src={image} />
      <h2 className={'text-container '}>{name}</h2>
    </div>
  );
};
