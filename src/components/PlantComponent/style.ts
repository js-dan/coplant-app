import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type PlantProps = {
  name?:string,
  qtd?:number
};

export const PlantContainer = styled.View<PlantProps>`
  justify-content: center;
  align-items: center;
  background-color: ${theme.mainColors.bakground};
  width: 150px
  height: 150px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  padding-top: 11px
`;

export const PlantText = styled.Text<PlantProps>`
  color: "black";
  font-size: ${theme.fonts.secondary.size};
  font-family: ${theme.fonts.secondary.family};
  font-weight: bold
`;

export const PlantImage = styled.Image<PlantProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;

