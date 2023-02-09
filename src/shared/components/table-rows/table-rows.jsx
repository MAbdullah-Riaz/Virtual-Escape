import styles from './table-rows.module.scss';

export const TableRows = ({ row }) => {
  const { rank, teamName, hints, incorrect, result } = row;

  return (
    <tr>
      <td>{rank}</td>
      <td>{teamName}</td>
      <td>{hints}</td>
      <td>{incorrect}</td>
      <td>{result}</td>
    </tr>
  );
};
