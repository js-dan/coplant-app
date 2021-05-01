import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type RequestCardActiveComponentProps = {};

export const RequestCardActiveContainer = styled.TouchableOpacity<RequestCardActiveComponentProps>`
  background-color: ${theme.mainColors.background};
  align-items: center
  justify-content: center
  flex-direction: column
  textAlignVertical: center;
  width: 300px
  margin-right: 20px
  height: 230px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  margin-top: 15px
`;

export const RequestCardActiveText = styled.Text<RequestCardActiveComponentProps>`
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;

export const RequestCardActiveFinishedText = styled.Text<RequestCardActiveComponentProps>`
  color: ${theme.mainColors.black};
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  font-style: italic;
`;

export const RequestCardActiveTitle = styled.Text<RequestCardActiveComponentProps>`
  color: ${theme.mainColors.black};
  font-weight: bold
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  justify-content: center;
  align-items: center;

`;

export const RequestCardActiveRating = styled.View<RequestCardActiveComponentProps>`
  align-items: flex-start
  flex-direction: row
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const RequestCardActiveTitleContainer = styled.View<RequestCardActiveComponentProps>`
  align-items: center;
  textAlignVertical: center;
  width: 300px
  justify-content: center
  margin-bottom: 10px;
  margin-top: 10px
`;

export const RequestCardActiveStar = styled.Image<RequestCardActiveComponentProps>`
  width: 20px
  height: 20px
  margin-right: 5px
`;

export const RequestCardActiveDivider = styled.View<RequestCardActiveComponentProps>`
  border-radius: 100
  width: 7px
  height: 7px
  background-color: #383838
  margin-top: auto
  margin-bottom: auto
  margin-left: 8px
  margin-right: 8px
`;

export const UserImage = styled.Image<RequestCardActiveComponentProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;