import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../assets/theme";

type EvaluationButtonProps = {};

export const EvaluationButtonContainer = styled.View<EvaluationButtonProps>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 375px
  height: 180px
  background-color: ${theme.mainColors.bakground};
  border-radius: 10px
  padding-left: 11px
`;


