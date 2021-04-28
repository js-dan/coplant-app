import styled from "styled-components/native";
import theme from "../../assets/theme";

export const SectionTitle = styled.Text`
  font-family: ${theme.fonts.h1.family};
  color: ${theme.mainColors.green};
  font-size: 48px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 90px;
  text-align: center;
`;

export const Background = styled.ScrollView`
  background-color: ${theme.mainColors.white};
  height: 100%;
`;

export const Logo = styled.Image`
  width: 195px;
  height: 202px;
`;
