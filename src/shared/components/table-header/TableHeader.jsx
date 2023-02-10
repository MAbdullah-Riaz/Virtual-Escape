import { Header } from 'data/table/Header';
import styles from './TableHeader.module.scss';

export const TableHeader = () => {
  const headerNames = Header;
  return (
    <tr>
      {headerNames.map((element) => (
        <th>{element}</th>
      ))}
    </tr>
  );
};
