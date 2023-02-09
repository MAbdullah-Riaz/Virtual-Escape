import styles from './Table.module.scss';
import { TableHeader } from '../table-header/TableHeader';
import { TableRows } from '../table-rows/TableRows';
import { MockData } from 'data/table/mockData';
export const Table = () => {
  const score = MockData;
  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {score.map((element) => (
          <TableRows key={element.rank} row={element} />
        ))}
      </tbody>
    </table>
  );
};
