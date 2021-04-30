import * as React from "react";
import { ImageSourcePropType } from "react-native";
import {
  HistoricCardContainer,
  HistoricCardText,
  HistoricCardRating,
  HistoricCardStar,
  HistoricCardTitle,
  HistoricCardEndDate,
  HistoricCardInfoContainer,
  HistoricCardTitleContainer,
  UserImage,
  DaysRemainingText,
  DaysRemainingContainer,
  DaysRemainingNumber,
  HistoricCardStatus,
  HistoricCardMessage
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";
import { Divider } from "../DividerComponent/style";

export interface HistoricCardComponentProps {
  userName?: string;
  endDate?:Date;
  finished?: boolean;
  rated?: boolean;
  remainingDays?: number;
}

const HistoricCardComponent: React.ElementType<HistoricCardComponentProps> = ({
  userName,
  endDate,
  finished,
  rated,
  remainingDays
}: HistoricCardComponentProps) => {
  if (finished && rated) {
    return (
      <HistoricCardContainer>
        <UserImage source={require('../../assets/img/users/'+userName+'.png')}/>
        <HistoricCardInfoContainer>
          <HistoricCardTitle>{userName}</HistoricCardTitle>
          <HistoricCardRating>
            <HistoricCardText>Sua Nota: </HistoricCardText>
            <HistoricCardStar source={icons.socialMedia.star} />
            <HistoricCardStar source={icons.socialMedia.star} />
            <HistoricCardStar source={icons.socialMedia.star} />
            <HistoricCardStar source={icons.socialMedia.star} />
            <HistoricCardStar source={icons.socialMedia.star} />
          </HistoricCardRating>
          <HistoricCardEndDate>{"Finalizado em: "+endDate.toLocaleDateString()}</HistoricCardEndDate>
        </HistoricCardInfoContainer>
      </HistoricCardContainer>
    );
  };
  if (finished && !rated) {
    return (
      <HistoricCardContainer>
        <UserImage source={require('../../assets/img/users/'+userName+'.png')}/>
        <HistoricCardInfoContainer>
          <HistoricCardTitle>{userName}</HistoricCardTitle>
          <HistoricCardRating>
            <HistoricCardText>Sua Nota: </HistoricCardText>
            <HistoricCardMessage>Avalie agora</HistoricCardMessage>
          </HistoricCardRating>
          <HistoricCardEndDate>{"Finalizado em: "+endDate.toLocaleDateString()}</HistoricCardEndDate>
        </HistoricCardInfoContainer>
      </HistoricCardContainer>
    );
  };
  if (!finished) {
    return (
      <HistoricCardContainer>
        <UserImage source={require('../../assets/img/users/'+userName+'.png')}/>
        <HistoricCardInfoContainer>
          <HistoricCardTitleContainer>
            <HistoricCardTitle>{userName}</HistoricCardTitle>
            <HistoricCardStatus></HistoricCardStatus>
          </HistoricCardTitleContainer>
          <DaysRemainingContainer>
            <DaysRemainingNumber>{remainingDays.toString()}</DaysRemainingNumber>
            <DaysRemainingText>{" dias restantes"}</DaysRemainingText>
          </DaysRemainingContainer>
        </HistoricCardInfoContainer>
      </HistoricCardContainer>
    );
  };
};

export default HistoricCardComponent;