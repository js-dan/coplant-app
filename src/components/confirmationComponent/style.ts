import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type ConfirmationProps = {};

export const ConfirmationContainer = styled.View<ConfirmationProps>`
  background-color: ${theme.mainColors.bakground};
  width: 329px
  height: 264px
  border-radius: 10px
  padding-left: 11px
`;

export const DescriptionText = styled.TextInput<ConfirmationProps>`
  width: 281.15px;
  height: 78.27px;
  color: "black";
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  background-color: ${theme.mainColors.lightGray}
`;

export const ConfirmationText = styled.Text<ConfirmationProps>`
  color: "black";
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;

