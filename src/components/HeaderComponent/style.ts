

import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

export const HeaderContainer = styled.Text`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
export const HeaderText = styled.Text`
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.h1.size};
  color: ${theme.mainColors.black};
`;
export const ArrowLeft = styled.Image`
  width: 20px;
  height: 20px;
`;
export const ShareIcon = styled.Image`
  width: 20px;
  height: 20px;
`;