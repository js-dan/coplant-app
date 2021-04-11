import Constants from 'expo-constants';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const View = styled.View`
  flex: 1;
  background-color: ${theme.mainColors.white};
`;
