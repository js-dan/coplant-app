import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type SpecificColor = {
  color?: string;
};

type AddMediaProps = {
}

export const AddMediaContainer = styled.TouchableOpacity<AddMediaProps>`
  width: 102px;
  height: 44px;

  justify-content: center;
  align-items: center;

  background-color: ${theme.mainColors.lightGray};
`;

export const AddMediaText = styled.Text<SpecificColor>`
  font-family: ${theme.fonts.h1.family};
  font-size: 14px;
  font-weight: bold;
  color:${theme.mainColors.black};
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;

  margin-right: ${theme.margins.leftRight};
`;
