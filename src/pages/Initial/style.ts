import styled from "styled-components/native";
import theme from "../../assets/theme";


export const ButtonContainer = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #5AB196;
  border-radius: 20px;
  margin-bottom: ${theme.margins.bottom};
  
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.h3.family};
  font-size: 20px;
  color: white;
`;

export const SectionTitle = styled.Text`
  font-family: ${theme.fonts.h1.family};
  color: ${theme.mainColors.green};
  font-size: 48px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 90px;
  text-align: center;
`;

export const InputTextField = styled.TextInput`
  width: 70%;
  height: 50px;
  font-size: 20px;
  padding-left: 5%;
  background-color: lightgray;
  border-radius: 40px;
  margin-bottom: 20px;
`

export const Background = styled.ScrollView`
  background-color: ${theme.mainColors.white};
  height: 100%;
`;

export const Logo = styled.Image`
  width: 195px;
  height: 202px;
`;
