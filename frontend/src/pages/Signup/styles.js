import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  span {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;

  a {
    align-self: center;
    margin-top: 20px;
    font-weight: bold;
    text-decoration: none;
  }
`;
