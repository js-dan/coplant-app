import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type PresentCardComponentProps = {};

export const PresentCardContainer = styled.View<PresentCardComponentProps>`
  background-color: ${theme.mainColors.background};
  align-items: center
  flex-direction: row
  textAlignVertical: center;
  width: 375px
  margin-right: 20px
  height: 130px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
`;

export const PresentCardText = styled.Text<PresentCardComponentProps>`
  color: "black";
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;

export const PresentCardTitle = styled.Text<PresentCardComponentProps>`
  color: "black";
  font-weight: bold
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};

`;

export const PresentCardRating = styled.View<PresentCardComponentProps>`
  align-items: flex-start
  flex-direction: row
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const PresentCardTitleContainer = styled.View<PresentCardComponentProps>`
  align-items: flex-start
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const PresentCardStar = styled.Image<PresentCardComponentProps>`
  width: 20px
  height: 20px
  margin-right: 5px
`;

export const PresentCardDivider = styled.View<PresentCardComponentProps>`
  border-radius: 100
  width: 7px
  height: 7px
  background-color: #383838
  margin-top: auto
  margin-bottom: auto
  margin-left: 8px
  margin-right: 8px
`;

export const UserImage = styled.Image<PresentCardComponentProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;

