import styles from './table-header.module.scss';

export const TableHeader = () => {
  return (
    <tr>
      <th>Rank</th>
      <th>Team Name</th>
      <th>Hints</th>
      <th>Incorrect</th>
      <th>Results</th>
    </tr>
  );
};
