import styled from 'styled-components';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;
`;

export const Divider = styled.View`
  width: 100%;
  border-color: rgba(255, 255, 255, 0.1);
  border-width: 0.5px;
  margin: 20px 0;
`;
