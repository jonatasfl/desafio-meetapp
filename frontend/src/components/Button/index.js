import styled from 'styled-components';
import { darken } from 'polished';

const buttonColors = {
  primary: '#d44059',
  secondary: '#4dbaf9',
};

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => (props.block ? '18px' : '16px')};
  font-weight: bold;
  width: ${props => props.block && '100%'};
  height: 42px;
  padding: 0 20px;
  background: ${props => buttonColors[props.color] || buttonColors.primary};
  color: #fff;
  border: 0px;
  border-radius: 4px;

  &:hover {
    background: ${props =>
      darken(0.08, buttonColors[props.color] || buttonColors.primary)};
  }

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;
