import { Card } from 'shared/components/card/CardZX';

import card11 from 'assets/card/card11.svg';
import card22 from 'assets/card/card22.svg';
import card33 from 'assets/card/card33.svg';
import card44 from 'assets/card/card44.svg';
import { LEADERBOARD_ROUTE } from 'container/routes/Constants';

import styles from './CardList.module.scss';

export const CardList = () => {
  const cardArray = [
    { name: 'OUR GAMES', image: card11 },
    { name: 'LEADERBOARD', image: card22, route: LEADERBOARD_ROUTE },
    { name: 'HOW TO PLAY', image: card33 },
    { name: 'START GAME', image: card44 },
  ];

  return (
    <div className={styles['card-list']}>
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
