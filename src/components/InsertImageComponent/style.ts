import { ImageSourcePropType } from 'react-native';

import styled from 'styled-components/native';
import theme from '../../assets/theme';

type InsertImageComponentProps = {};

export const InsertImageContainer = styled.View<InsertImageComponentProps>`
  background-color: ${theme.mainColors.background};
  width: 329px
  height: 264px
  border-radius: 10px
  padding-left: 11px
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.TextInput<InsertImageComponentProps>`
  width: 130px;
  height: 25px;
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  background-color: ${theme.mainColors.lightGray}
  
  
`;
export const InputQtd = styled.Picker<InsertImageComponentProps>`
  width: 130px;
  height: 25px;
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  background-color: ${theme.mainColors.lightGray}
  
  
`;

export const InsertImageField = styled.View<InsertImageComponentProps>`
  flex-direction: row
  justify-content: center;
  align-items: center;
  background-color: ${theme.mainColors.background};
  width: 329px
  height: 40px
  margin-top: 8px
`;
export const DescriptionText = styled.Text`
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.body.size};
`;
export const Image = styled.Image<InsertImageComponentProps>`
  width: 109px
  height: 81px
  margin-right: 5px
  border-radius: 5px
  margin-bottom: 20px
  margin-top: 8px
`;
