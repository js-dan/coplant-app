import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type CommentProps = {};

export const CommentContainer = styled.View<CommentProps>`
  background-color: ${theme.mainColors.darkBlue};
  width: 80%
  max-width: 240px
  margin-right: 20px
  height: 150px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  padding-top: 11px
`;

export const CommentText = styled.Text<CommentProps>`
  color: ${theme.mainColors.white};
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;

export const CommentTitle = styled.Text<CommentProps>`
  color: ${theme.mainColors.white};
  font-weight: bold
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};

`;

export const CommentRating = styled.View<CommentProps>`
  align-items: flex-start
  flex-direction: row
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const CommentStar = styled.Image<CommentProps>`
  width: 20px
  height: 20px
  margin-right: 5px
`;

export const CommentDivider = styled.View<CommentProps>`
  border-radius: 100
  width: 7px
  height: 7px
  background-color: #383838
  margin-top: auto
  margin-bottom: auto
  margin-left: 8px
  margin-right: 8px
`;
