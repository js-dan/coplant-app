import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type iconsProps = {
  arrowLeft?: string;
  shareIcon?: string;
};

export const HeaderContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;
export const HeaderText = styled.View`
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.h1.size};
  color: ${theme.mainColors.black};
  font-weight: bold;
`;
export const ArrowLeft = styled.Image<iconsProps>`
  width: 20px;
  opacity: ${({ arrowLeft }) => (arrowLeft ? `100` : `0`)};
  height: ${({ arrowLeft }) => (arrowLeft ? `20px` : `0`)};
`;
export const ShareIcon = styled.Image<iconsProps>`
  width: 20px;
  opacity: ${({ shareIcon }) => (shareIcon ? `100` : `0`)};
  height: ${({ shareIcon }) => (shareIcon ? `20px` : `0`)};
`;
