import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

const buttonColors = {
  primary: '#f94d6a',
  secondary: '#E5556E',
};

export const Container = styled(RectButton)`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  align-items: center;
  justify-content: center;
  background: ${(props) => buttonColors[props.color] || buttonColors.primary};
  border-radius: 4px;
  margin-top: 15px;
  opacity: ${({ loading }) => (loading ? 0.7 : 1)};
`;

export const Content = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
