import styles from './TableHeader.module.scss';
import { headerNames } from 'data/table/header';
export const TableHeader = () => {
  const headers = headerNames;
  return (
    <tr>
      {headers.map((element) => (
        <th>{element}</th>
      ))}
    </tr>
  );
};
