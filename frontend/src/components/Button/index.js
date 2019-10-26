import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => (props.block ? '18px' : '16px')};
  font-weight: bold;
  width: ${props => props.block && '100%'};
  height: 42px;
  padding: 0 20px;
  background: #d44059;
  color: #fff;
  border: 0px;
  border-radius: 4px;

  &:hover {
    background: ${darken(0.03, '#d44059')};
  }

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;
