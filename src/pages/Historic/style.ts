import styled from 'styled-components/native';
import theme from '../../assets/theme';

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center
  width: 100%;
`;

export const SectionTitle = styled.Text`
  font-family: ${theme.fonts.h1.family}
  font-size: 26px
  font-weight: bold
  margin-bottom: 7px
  padding-left: 15px
`;

export const Background = styled.ScrollView`
  background-color: ${theme.mainColors.white};
  height: 92%;
`;
