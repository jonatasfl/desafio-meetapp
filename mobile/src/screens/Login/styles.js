import styled from 'styled-components';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  margin-bottom: 50px;
`;

export const TextLink = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;
