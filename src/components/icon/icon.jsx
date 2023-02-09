import { IconContainer } from './icon.styles';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Fragment, useState } from 'react';

const Icon = ({ textColor, backgroundColor, className }) => {
  return (
    <Fragment>
      <IconContainer
        textColor={textColor}
        backgroundColor={backgroundColor}
        className={className}
        id='my-element'
      >
        ?
      </IconContainer>
      <Tooltip anchorId='my-element' variant='error' className='red'>
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
