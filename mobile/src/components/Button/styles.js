import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: #f94d6a;
  border-radius: 4px;
  margin-top: 15px;
`;

export const Content = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
