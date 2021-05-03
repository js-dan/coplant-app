import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type ConfirmationProps = {};

export const ConfirmationContainer = styled.View<ConfirmationProps>`
  background-color: ${theme.mainColors.background};
  width: 329px

  top: 30%
  left: 4%
  height: 400px
  border-radius: 10px
  padding-left: 11px
`;

export const DescriptionText = styled.TextInput<ConfirmationProps>`
  width: 95%;
  height: 78.27px;
  padding-left: 3%
  align-self: center
  color: #000000
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  background-color: ${theme.mainColors.lightGray}
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
  margin-top: 10px
`;

export const ConfirmationText = styled.Text<ConfirmationProps>`
  color: #000000;
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  margin-bottom: 5px;
  margin-top: 10px
  margin-right: 15px
`;

export const ConfirmationTitle = styled.Text<ConfirmationProps>`
  color: #000000;
  font-size: ${theme.fonts.h1.size};
  font-family: ${theme.fonts.h1.family};
  margin-bottom: 5px;
  margin-top: 10px
  margin-right: 15px
`;
export const ConfirmationArea = styled.View<ConfirmationProps>`
  flex-direction: row
  margin-bottom: 10px;
  margin-top: 10px
`;
