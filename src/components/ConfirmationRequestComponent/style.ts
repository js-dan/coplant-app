import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type ConfirmationRequestComponentProps = {};

export const ConfirmationRequestContainer = styled.View<ConfirmationRequestComponentProps>`
  background-color: ${theme.mainColors.background};
  align-items: start
  justify-content: space-between
  textAlignVertical: center;
  width: 356px
  margin-right: 20px
  height: 660px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  margin-top: 15px
`;

export const CardTitleContainer = styled.View<ConfirmationRequestComponentProps>`
  background-color: ${theme.mainColors.background};
  align-items: center
  justify-content: center
  flex-direction: row
  textAlignVertical: center;
  width: 340px
  margin-right: 20px
  height: 130px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  margin-top: 15px
`;

export const ConfirmationRequestText = styled.Text<ConfirmationRequestComponentProps>`
  color: "black";
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  textAlignVertical: start;
  margin-bottom: 15px
`;

export const ConfirmationRequestFieldText = styled.Text<ConfirmationRequestComponentProps>`
  color: "black";
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  justify-content: left
  background-color: ${theme.mainColors.lightGray}
  width: 325px
  font-style: italic;
  margin-bottom: 15px
  padding-right: ${theme.margins.leftRight}
`;

export const ConfirmationRequestTitle = styled.Text<ConfirmationRequestComponentProps>`
  color: "black";
  font-weight: bold
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  justify-content: left;
  align-items: center;

`;

export const ConfirmationRequestRating = styled.View<ConfirmationRequestComponentProps>`
  align-items: flex-start
  flex-direction: row
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px
`;

export const ConfirmationRequestTitleContainer = styled.View<ConfirmationRequestComponentProps>`
  align-items: center;
  textAlignVertical: center;
  width: 200px
  justify-content: start
  margin-bottom: 10px;
  margin-top: 10px
`;

export const ConfirmationRequestStar = styled.Image<ConfirmationRequestComponentProps>`
  width: 20px
  height: 20px
  margin-right: 5px
`;

export const ConfirmationRequestDivider = styled.View<ConfirmationRequestComponentProps>`
  border-radius: 100
  width: 7px
  height: 7px
  background-color: #383838
  margin-top: auto
  margin-bottom: auto
  margin-left: 8px
  margin-right: 8px
`;

export const UserImage = styled.Image<ConfirmationRequestComponentProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  align-items: end
  width: 100%;
  flex-direction: row
`;

export const InfoContainer = styled.View`
  justify-content: start;
  align-items: start
  width: 100%;
  
`;