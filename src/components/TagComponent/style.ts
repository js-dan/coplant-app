import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type TagProps = {
  size?: string;
}
type SpecificColor = {
    color?: string;
};  

export const TagContainer = styled.Text<TagProps>`
  width: ${theme.tagSize.width};
  padding-top: ${theme.tagSize.padding};
  padding-bottom: ${theme.tagSize.padding};
  justify-content: center;
  align-items: center;
  background-color: ${theme.mainColors.white};
  border-radius: ${theme.borderRadius.button};
  display: flex;
  border: 1px solid ${theme.mainColors.green};
`;
export const TagText = styled.Text<SpecificColor>`
  font-family: ${theme.fonts.h6.family};
  font-size: ${theme.fonts.h6.size};
  color: ${theme.mainColors.green};
  text-align: center;
`;
