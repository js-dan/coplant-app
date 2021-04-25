import * as React from "react";
import { ImageSourcePropType } from "react-native";
import {
  HistoricCardContainer,
  HistoricCardText,
  HistoricCardRating,
  HistoricCardStar,
  HistoricCardTitle,
  HistoricCardEndDate,
  HistoricCardTitleContainer,
  UserImage,
  HistoricCardFinishedText
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";
import { Divider } from "../DividerComponent/style";

export interface HistoricCardComponentProps {
  userName?: string;
  endDate?:Date;
  finished?: boolean
  rated?: boolean
}

const HistoricCardComponent: React.ElementType<HistoricCardComponentProps> = ({
  userName,
  endDate,
  finished,
  rated
}: HistoricCardComponentProps) => {
  return (
    <HistoricCardContainer>
      <UserImage source={require('../../assets/img/users/'+userName+'.png')}/>
      <HistoricCardTitleContainer>
        <HistoricCardTitle>{userName}</HistoricCardTitle>
        <HistoricCardRating>
          <HistoricCardText>Sua Nota: </HistoricCardText>
          <HistoricCardStar source={icons.socialMedia.star} />
          <HistoricCardStar source={icons.socialMedia.star} />
          <HistoricCardStar source={icons.socialMedia.star} />
          <HistoricCardStar source={icons.socialMedia.star} />
          <HistoricCardStar source={icons.socialMedia.star} />
        </HistoricCardRating>
        <HistoricCardEndDate>{" Finalizado em: "+endDate.toLocaleDateString()}</HistoricCardEndDate>
      </HistoricCardTitleContainer>
      
    </HistoricCardContainer>
  );
};

export default HistoricCardComponent;