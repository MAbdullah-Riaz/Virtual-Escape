import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

export const IconContainer = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  width: 23px;
  font-weight: bold;
  color: ${(props) => props.textColor};
  position: absolute;
  text-align: center;
  padding: 1px 1px;
  right: 10px;
  bottom: 15px;
`;

IconContainer.defaultProps = {
  textColor: '#ffffff',
  backgroundColor: '#B91213',
};
