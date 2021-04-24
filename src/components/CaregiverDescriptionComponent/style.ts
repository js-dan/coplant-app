import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type SpecificColor = {
  color?: string;
};

type DescriptionProps = {};

export const DescriptionContainer = styled.TouchableOpacity<DescriptionProps>`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
`;

export const DescriptionTitle = styled.Text<SpecificColor>`
  font-family: ${theme.fonts.h1.family};
  font-size: ${theme.fonts.h2.size};
  font-weight: bold;
  margin-bottom: 7px;
`;

export const DescriptionText = styled.Text`
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.body.size};
  margin-bottom: 19px;
`;
