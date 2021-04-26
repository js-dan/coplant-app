import styled from 'styled-components/native';
import theme from '../../assets/theme';

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.mainColors.cardBackground};
  align-content: center;
  align-self: center;
  align-items: center;
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 20px;  
`;

export const ProfileInfos = styled.View`
  display: flex;
  width: 75%;  
`;

export const Name = styled.Text`
  display: flex;
  font-family: ${theme.fonts.h3.family};
  font-size: ${theme.fonts.h3.size};
`;

export const Infos = styled.Text`
  display: flex;
  font-family: ${theme.fonts.secondary.family};
  font-size: ${theme.fonts.secondary.size};
`;

// Skills
export const Skills = styled.View`
  display: flex;
  justify-content: space-between;
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.body.size};
  flex-direction: row;
  margin-top:10px;  
`;

export const Icon = styled.Image`
  width: 90px;
  height: 90px;
  align-self: center;
`;
