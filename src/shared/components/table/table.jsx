import styles from './table.module.scss';
import { TableHeader } from '../table-header/table-header';
import { TableRows } from '../table-rows/table-rows';
export const Table = () => {
  const score = [
    {
      rank: 1,
      teamName: 'Cat Out The Bag',
      hints: 1,
      incorrect: 0,
      result: '32:10',
    },
    { rank: 2, teamName: 'Midges!', hints: 6, incorrect: 2, result: '33:09' },
    { rank: 3, teamName: 'A-Team', hints: 3, incorrect: 1, result: '33:12' },
    {
      rank: 4,
      teamName: 'Mighty Duc',
      hints: 1,
      incorrect: 4,
      result: '35:23',
    },
    {
      rank: 5,
      teamName: 'Clan Peggu',
      hints: 2,
      incorrect: 1,
      result: '36:42',
    },
    { rank: 6, teamName: 'Cryptics', hints: 0, incorrect: 6, result: '37:33' },
    {
      rank: 7,
      teamName: "Ocean's Ten",
      hints: 1,
      incorrect: 2,
      result: '37:19',
    },
    {
      rank: 8,
      teamName: 'Potbelly P',
      hints: 3,
      incorrect: 0,
      result: '37:41',
    },
    { rank: 9, teamName: 'Hugs+', hints: 2, incorrect: 0, result: '39:59' },
    {
      rank: 10,
      teamName: 'Witty Pun',
      hints: 6,
      incorrect: 3,
      result: '40:01',
    },
    {
      rank: 11,
      teamName: 'We Are Inco Hoots',
      hints: 4,
      incorrect: 2,
      result: '40:41',
    },
    {
      rank: 12,
      teamName: 'Polka Peeps',
      hints: 1,
      incorrect: 1,
      result: '43:11',
    },
    {
      rank: 13,
      teamName: 'Shirlz Girls',
      hints: 3,
      incorrect: 6,
      result: '45:12',
    },
    {
      rank: 14,
      teamName: 'Simpsons Donkeys',
      hints: 6,
      incorrect: 6,
      result: '45:36',
    },
    {
      rank: 15,
      teamName: 'The Escape Peas',
      hints: 2,
      incorrect: 9,
      result: '47:01',
    },
    {
      rank: 16,
      teamName: "Mike's Onions",
      hints: 7,
      incorrect: 4,
      result: '49:49',
    },
    {
      rank: 17,
      teamName: 'Fancy Feasters',
      hints: 10,
      incorrect: 10,
      result: '52:11',
    },
    {
      rank: 18,
      teamName: 'Noodley Doodles',
      hints: 3,
      incorrect: 3,
      result: '53:20',
    },
    {
      rank: 19,
      teamName: 'Moondinis',
      hints: 5,
      incorrect: 6,
      result: '55:17',
    },
    { rank: 20, teamName: 'LC-PL-MT', hints: 6, incorrect: 2, result: '59:24' },
  ];

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
