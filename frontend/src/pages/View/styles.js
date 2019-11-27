import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Title = styled.h1``;

export const Actions = styled.div`
  display: flex;

  button {
    margin-left: 15px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 25px;
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 30px;
`;

export const Details = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);

  span {
    margin-right: 30px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;
