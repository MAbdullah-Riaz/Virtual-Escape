import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';

export const Card = ({ name, image, onClickNavigate }) => {
  const navigate = useNavigate();
  const onClickHandler = () =>
    onClickNavigate ? navigate(onClickNavigate) : null;

  return (
    <div className={styles['card-container']} onClick={onClickHandler}>
      <img src={image} />
      <h2 className={styles['text-container']}>{name}</h2>
    </div>
  );
};
