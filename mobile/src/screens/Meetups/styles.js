import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const Card = styled.View`
  width: 100%;
  border-radius: 4px;
  background: #fff;
  margin-top: 50px;
`;

export const CardThumb = styled.ImageBackground`
  height: 200px;
`;

export const CardBody = styled.View`
  padding: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const CardContent = styled.Text`
  justify-content: center;
  font-size: 14px;
  color: #999;
  margin-top: 10px;
`;

export const Icon = styled(MaterialIcons)`
  color: #999;
  height: 14px;
`;
