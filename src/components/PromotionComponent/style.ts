import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

export const PromotionContainer = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
  background: ${theme.mainColors.green};
  borderRadius: 10px;
  padding: 12px 15px;
  margin-bottom: 15px;
`;
export const HeaderText = styled.Text`
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.h6.size};
  color: ${theme.mainColors.black};
  font-weight: bold;
  margin-bottom: 5px;
`;
export const BodyText = styled.Text`
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.h6.size};
  color: ${theme.mainColors.black};
`;
export const PromotionLeftContainer = styled.View`
  background: ${theme.mainColors.orange};
  borderRadius: 10px;
  padding: 8px 5px;
  margin-right: 20px;
`;
export const PromotionRightContainer = styled.View`
    display: flex;
`;
export const PromotionIcon = styled.Image`
  width: 26px;
  height: 26px;
`;
