import { Card } from 'components/shared/card/Card';

import cardOurGames from 'assets/card/card-our-games.svg';
import cardLeaderboard from 'assets/card/card-leaderboard.svg';
import cardHowToPlay from 'assets/card/card-how-to-play.svg';
import cardStartGame from 'assets/card/card-start-game.svg';
import { LEADERBOARD_ROUTE } from 'container/routes/Constants';

import styles from './CardList.module.scss';
const cardArray = [
  { name: 'OUR GAMES', image: cardOurGames },
  {
    name: 'LEADERBOARD',
    image: cardLeaderboard,
    route: LEADERBOARD_ROUTE,
  },
  { name: 'HOW TO PLAY', image: cardHowToPlay },
  { name: 'START GAME', image: cardStartGame },
];
export const CardList = () => {
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
