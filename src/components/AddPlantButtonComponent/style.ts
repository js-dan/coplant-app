import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type SpecificColor = {
  color?: string;
};

type AddPlantButtonProps = {
}

export const AddPlantButtonContainer = styled.TouchableOpacity<AddPlantButtonProps>`
  width: 92px;
  height: 92px;

  justify-content: center;
  align-items: center;
  align-self: center

  background-color: ${theme.mainColors.orange};
  border-radius: 46px;
`;

export const AddPlantButtonText = styled.Text<SpecificColor>`
  font-family: ${theme.fonts.h1.family};
  font-size: 80px;
  margin-top: -10%
  font-weight: bold;
  color:${theme.mainColors.white};
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;

  margin-right: ${theme.margins.leftRight};
`;
