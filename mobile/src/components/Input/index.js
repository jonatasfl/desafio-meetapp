import styled from 'styled-components';
import { TextInput } from 'react-native';

export default styled(TextInput).attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
  underlineColorAndroid: 'transparent',
})`
  width: 100%;
  height: 50px;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 20px;
  margin-bottom: 10px;
`;
