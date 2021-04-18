import styled from 'styled-components/native';
import theme from '../../assets/theme';

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.mainColors.cardBackground};
  align-self: center;
  align-items: center;
  width: 90%;
  padding: 15px;
  border-radius: 15px;
`;

export const ProfilePicture = styled.View`
  display: flex;
  width: 85px;
  height: 85px;
  background-color: darkgray;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ProfileInfos = styled.View`
  display: flex;
  width: 80%;  
  padding-left: 20px;
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
  font-family: ${theme.fonts.body.family};
  font-size: ${theme.fonts.body.size};
`;

export const Icon = styled.Image`
  width: 120px;
  height: 120px;

  align-self: center;
  margin-bottom: 25px;
`;
