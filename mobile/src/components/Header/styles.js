import styled from "styled-components";
import Constants from "expo-constants";

export const Container = styled.View`
  width: 100%;
  height: ${`${Constants.statusBarHeight + 64}px`};
  background: rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.Image`
  width: 24px;
`;
