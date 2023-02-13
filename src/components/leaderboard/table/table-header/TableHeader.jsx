import { Header } from 'data/leaderboard/Header';
import styles from './TableHeader.module.scss';

export const TableHeader = () => {
  const headerNames = Header;
  return (
    <tr>
      {headerNames.map((element) => (
        <th key={element}>{element}</th>
      ))}
    </tr>
  );
};
