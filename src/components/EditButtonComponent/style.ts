import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type SpecificColor = {
  color?: string;
};

type EditButtonProps = {
}

export const UserImage = styled.Image<EditButtonProps>`
  width: 25px
  height: 25px
  margin-right: 5px
`;