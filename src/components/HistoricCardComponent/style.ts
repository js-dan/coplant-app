import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type HistoricCardComponentProps = {};

export const HistoricCardContainer = styled.View<HistoricCardComponentProps>`
  background-color: ${theme.mainColors.background};
  align-items: center
  flex-direction: row
  textAlignVertical: center;
  width: 375px
  margin-right: 20px
  height: 130px
  border-radius: 10px
  padding-left: ${theme.margins.leftRight}
  padding-right: ${theme.margins.leftRight}
  margin-top: 15px
`;

export const HistoricCardTitle = styled.Text<HistoricCardComponentProps>`
  color: #000000
  font-weight: bold
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
`;

export const HistoricCardText = styled.Text<HistoricCardComponentProps>`
  color: #000000
  font-size: ${theme.fonts.h6.size};
  font-family: ${theme.fonts.secondary.family};
`;

export const HistoricCardEndDate = styled.Text<HistoricCardComponentProps>`
  color: #000000
  font-style: italic;
  font-size: ${theme.fonts.h6.size};
  font-family: ${theme.fonts.secondary.family};
`;

export const HistoricCardFinishedText = styled.Text<HistoricCardComponentProps>`
  color: #000000
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.family};
  justify-content: end;
  font-style: italic;
`;

export const HistoricCardRating = styled.View<HistoricCardComponentProps>`
  align-items: flex-start
  flex-direction: row
  align-items: center
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const HistoricCardTitleContainer = styled.View<HistoricCardComponentProps>`
  align-items: flex-start
  textAlignVertical: center;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 60%
`;

export const HistoricCardStar = styled.Image<HistoricCardComponentProps>`
  width: 17px
  height: 17px
  margin-right: 5px
`;

export const HistoricCardDivider = styled.View<HistoricCardComponentProps>`
  border-radius: 100
  width: 7px
  height: 7px
  background-color: #383838
  margin-top: auto
  margin-bottom: auto
  margin-left: 8px
  margin-right: 8px
`;

export const UserImage = styled.Image<HistoricCardComponentProps>`
  width: 92px
  height: 92px
  margin-right: 5px
  border-radius: 46px
`;
