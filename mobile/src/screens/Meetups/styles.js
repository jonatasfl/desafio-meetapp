import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const ContentArea = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-top: 50px;
`;

export const NoData = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding-top: 20px;
`;

export const Icon = styled(MaterialIcons)`
  color: #999;
  height: 14px;
`;
