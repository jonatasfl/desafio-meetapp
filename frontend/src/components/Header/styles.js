import styled from 'styled-components';

export const MainHeader = styled.header`
  width: 100%;
  height: 92px;
  background-color: #000;
  opacity: 0.3;
  color: #fff;
  padding: 5px 250px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;

  span {
    color: #fff;
    font-weight: bold;
    line-height: 16px;
  }

  small {
    color: #999;
    font-size: 14px;
    line-height: 16px;
  }
`;
