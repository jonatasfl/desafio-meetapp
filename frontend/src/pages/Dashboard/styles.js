import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.div`
  list-style: none;
  padding-top: 50px;
`;

export const ListItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);

    span {
      padding-left: 20px;
    }
  }
`;
