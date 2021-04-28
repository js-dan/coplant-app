import styled from "styled-components/native";
import theme from "../../assets/theme";

export const SectionTitle = styled.Text`
  font-family: ${theme.fonts.h1.family}
  font-size: ${theme.fonts.secondary.size}
  font-weight: bold
  margin-top: 60px
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Background = styled.ScrollView`
  background-color: ${theme.mainColors.white};
  height: 100%;
`;

export const ImgLike = styled.Image`
  width: 60px;
  height: 60px;
`;
