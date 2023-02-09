import { Tooltip } from 'react-tooltip';
import { Fragment } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './Icon.module.scss';

const Icon = ({ className }) => {
  return (
    <Fragment>
      <div
        className={`${styles[`icon-container`]} ${className}`}
        id='my-element'
      >
        ?
      </div>
      <Tooltip anchorId='my-element' className='red'>
        <span>
          Your game code is 8 characters long and can be
          <br />
          found in the confirmation email. Up to 6 players
          <br /> can use the same game code to log in.
        </span>
      </Tooltip>
    </Fragment>
  );
};

export default Icon;
