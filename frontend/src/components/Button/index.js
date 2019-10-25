import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 42px;
  padding: 12px 20px;
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
