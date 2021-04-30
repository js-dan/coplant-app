import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type EvaluationProps = {};

export const EvaluationContainer = styled.View<EvaluationProps>`
  width: 375px
  height: 150px
  background-color: ${theme.mainColors.background};
  border-radius: 10px
  padding-left: 11px
`;

export const MessageText = styled.TextInput<EvaluationProps>`
  width: 281.15px;
  height: 78.27px;
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  background-color: ${theme.mainColors.lightGray}
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  margin-top: 10px
  align-text:center
`;

export const EvaluationText = styled.Text<EvaluationProps>`
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  margin-bottom: 5px;
  margin-top: 10px
  margin-right: 15px
  text-align: center
  font-weight: bold
`;

