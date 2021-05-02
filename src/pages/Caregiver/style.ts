import styled from 'styled-components/native';
import theme from '../../assets/theme';

type foreGroundProps = {
  isModalOpen?: boolean;
};

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center
  width: 100%;
`;

export const Darkforeground = styled.View<foreGroundProps> `
  background-color: rgba(0, 0, 0, 0.6)
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
`

export const SectionTitle = styled.Text`
  font-family: ${theme.fonts.h1.family}
  font-size: 26px
  font-weight: bold
  margin-bottom: 7px
  padding-left: 15px
`;

export const Background = styled.ScrollView`
  background-color: ${theme.mainColors.background};
  height: 92%;
`;
