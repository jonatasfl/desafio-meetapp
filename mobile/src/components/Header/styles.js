import styled from "styled-components";
import Constants from "expo-constants";

export const Container = styled.View`
  width: 100%;
  height: 64px;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  margin-top: ${`${Constants.statusBarHeight}px`};
`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
