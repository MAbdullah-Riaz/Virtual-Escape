import Icon from '../icon/icon';
import './input.styles.scss';

const Input = ({ placeholder, onChangeHandler }) => {
  return (
    <div className='input-container'>
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
