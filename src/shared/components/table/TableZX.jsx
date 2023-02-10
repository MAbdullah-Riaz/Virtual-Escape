import { TableHeader } from '../table-header/TableHeaderZX';
import { TableRows } from '../table-rows/TableRowsZX';
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
