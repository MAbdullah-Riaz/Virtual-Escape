import { TableHeader } from '../table-header/TableHeader';
import { TableRows } from '../table-rows/TableRows';
import { MockData } from 'data/table/MockData';
import styles from './Table.module.scss';
export const Table = () => {
  const rows = MockData;
  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {rows.map((element) => (
          <TableRows key={element.rank} row={element} />
        ))}
      </tbody>
    </table>
  );
};
