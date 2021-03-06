import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type ComplimentsProps = {};

export const ComplimentsContainer = styled.View<ComplimentsProps>`
  justify-content: center;
  align-items: center;
  width: 375px
  height: 180px
  background-color: ${theme.mainColors.background};
  border-radius: 10px
  padding-left: 11px
`;

export const MessageText = styled.TextInput<ComplimentsProps>`
  width: 281.15px;
  height: 78.27px;
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  background-color: ${theme.mainColors.lightGray}
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const ComplimentsText = styled.Text<ComplimentsProps>`
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  margin-bottom: 5px;
  margin-top: 10px
  margin-right: 15px
  text-align: center
  font-weight: bold
`;

