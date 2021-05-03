import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type AddPlantProps = {
};

export const AddPlantContainer = styled.View<AddPlantProps>`
  justify-content: center;
  align-items: center;
  background-color: ${theme.mainColors.background};
  width: 150px
  height: 150px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  padding-top: 11px
`;

export const AddPlantText = styled.Text<AddPlantProps>`
  color: ${theme.mainColors.black};
  font-size: 15px;
  font-family: ${theme.fonts.secondary.family};
  font-weight: bold
  margin-top: 10px

`;

export const AddPlantImage = styled.Image<AddPlantProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;
