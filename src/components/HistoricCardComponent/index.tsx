import * as React from "react";
import { ImageSourcePropType } from "react-native";
import profilePic2 from '../../assets/img/users/CaioAndrade.png'
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
import { useNavigation } from "@react-navigation/core";

export interface HistoricCardComponentProps {
  userName?: string;
  endDate?:Date;
  finished?: boolean;
  rated?: boolean;
  remainingDays?: number;
  userImage: string
}

const images = {
  liz: require("../../assets/img/users/LizAndrade.png"),
  caio: require("../../assets/img/users/CaioAndrade.png"),
  ligia: require("../../assets/img/users/ligia.png"),
  claudia: require("../../assets/img/users/claudia.png")
}

function getImage(name) {
  switch (name) {
    case "liz":
      return images.liz
    case "caio":
      return images.caio
    case "ligia":
      return images.ligia
    case "claudia":
      return images.claudia
  }
}

const HistoricCardComponent: React.ElementType<HistoricCardComponentProps> = ({
  userName,
  endDate,
  finished,
  rated,
  userImage,
  remainingDays
}: HistoricCardComponentProps) => {
  const navigation = useNavigation()

  if (finished && rated) {
    return (
      <HistoricCardContainer>
        <UserImage source={getImage(userImage)as ImageSourcePropType}/>
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
      <HistoricCardContainer onPress={() => {navigation.navigate("Avaliação")}}>
        <UserImage source={getImage(userImage) as ImageSourcePropType}/>
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
      <HistoricCardContainer onPress={() => {navigation.navigate("Chat")}}>
        <UserImage source={getImage(userImage) as ImageSourcePropType}/>
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