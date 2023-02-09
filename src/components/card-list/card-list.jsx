import { Card } from '../card/card';
import card11 from '../../assets/card/card11.svg';
import card22 from '../../assets/card/card22.svg';
import card33 from '../../assets/card/card33.svg';
import card44 from '../../assets/card/card44.svg';
import './card-list.styles.scss';
export const CardList = () => {
  const cardArray = [
    { name: 'OUR GAMES', image: card11 },
    { name: 'LEADERBOARD', image: card22, route: '/leaderboard' },
    { name: 'HOW TO PLAY', image: card33 },
    { name: 'START GAME', image: card44 },
  ];

  return (
    <div className='card-list'>
      {cardArray.map((eachCard) => (
        <Card
          key={eachCard.name}
          name={eachCard.name}
          image={eachCard.image}
          onClickNavigate={eachCard.route}
        />
      ))}
    </div>
  );
};
