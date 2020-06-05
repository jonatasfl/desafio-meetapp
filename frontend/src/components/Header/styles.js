import styled from 'styled-components';

export const MainHeader = styled.header`
  width: 100%;
  height: 92px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;

  div.user-data {
    display: flex;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  line-height: 25px;
  padding-right: 30px;

  span {
    color: #fff;
    font-weight: bold;
  }

  a {
    color: #999;
    font-size: 14px;
    text-decoration: none;
  }
`;
