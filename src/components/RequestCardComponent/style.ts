import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type RequestCardComponentProps = {};

export const RequestCardContainer = styled.View<RequestCardComponentProps>`
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
  margin-top: 15px
`;

export const RequestCardText = styled.Text<RequestCardComponentProps>`
  color: ${theme.mainColors.black}
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;

export const RequestCardFinishedText = styled.Text<RequestCardComponentProps>`
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  font-style: italic;
`;

export const RequestCardTitle = styled.Text<RequestCardComponentProps>`
  color: ${theme.mainColors.black};
  font-weight: bold
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};

`;

export const RequestCardRating = styled.View<RequestCardComponentProps>`
  align-items: flex-start
  flex-direction: row
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const RequestCardTitleContainer = styled.View<RequestCardComponentProps>`
  align-items: flex-start
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const RequestCardStar = styled.Image<RequestCardComponentProps>`
  width: 20px
  height: 20px
  margin-right: 5px
`;

export const RequestCardDivider = styled.View<RequestCardComponentProps>`
  border-radius: 100
  width: 7px
  height: 7px
  background-color: #383838
  margin-top: auto
  margin-bottom: auto
  margin-left: 8px
  margin-right: 8px
`;

export const UserImage = styled.Image<RequestCardComponentProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;