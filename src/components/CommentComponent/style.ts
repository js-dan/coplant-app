import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type CommentProps = {};

export const CommentContainer = styled.View<CommentProps>`
  background-color: ${theme.mainColors.darkBlue};
  width: 240px
  height: 121px
  border-radius: 10px
  padding-left: 11px
`;

export const CommentText = styled.Text<CommentProps>`
  color: ${theme.mainColors.white};
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;
