import * as React from "react";
import { ImageSourcePropType } from "react-native";
import profilePic from '../../assets/img/users/LizMachado.png';
import {
  ConfirmationRequestContainer,
  ConfirmationRequestText,
  ConfirmationRequestTitle,
  ConfirmationRequestRating,
  ConfirmationRequestDivider,
  ConfirmationRequestStar,
  ConfirmationRequestTitleContainer,
  CardTitleContainer,
  UserImage,
  ConfirmationRequestFieldText,
  ButtonContainer,
  InfoContainer,
  SectionTitle
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";
import { Divider } from "../DividerComponent/style";
import {ButtonComponent, HeaderComponent} from "../"

export interface ConfirmationRequestComponentProps {
  stars?: number;
  userName?: string;
  userLocation?: string;
  startDate?:Date;
  endDate?:Date
  finished?: string
  plants?: Array<string>
  before?: Boolean
}

const ConfirmationRequestComponent: React.ElementType<ConfirmationRequestComponentProps> = ({
  stars,
  userName,
  userLocation,
  startDate,
  endDate,
  finished,
  plants,
  before,
}: ConfirmationRequestComponentProps) => {
  return (
    <ConfirmationRequestContainer>
      <CardTitleContainer>
        <UserImage source={profilePic as ImageSourcePropType}/>
        <ConfirmationRequestTitleContainer>
          <ConfirmationRequestTitle>{userName}</ConfirmationRequestTitle>
          <ConfirmationRequestRating>
            <ConfirmationRequestText>{stars}</ConfirmationRequestText>
            <ConfirmationRequestStar source={icons.socialMedia.star} />
          </ConfirmationRequestRating>
        </ConfirmationRequestTitleContainer>
      </CardTitleContainer>
      <InfoContainer>
        <ConfirmationRequestText>{"Data Inicio"}</ConfirmationRequestText>
        <ConfirmationRequestFieldText>{startDate.toLocaleDateString()}</ConfirmationRequestFieldText>
        <ConfirmationRequestText>{"Data Fim"}</ConfirmationRequestText>
        <ConfirmationRequestFieldText>{endDate.toLocaleDateString()}</ConfirmationRequestFieldText>
        <ConfirmationRequestText>{"Localização"}</ConfirmationRequestText>
        <ConfirmationRequestFieldText>{userLocation}</ConfirmationRequestFieldText>
        <ConfirmationRequestText>{"Plantas:"}</ConfirmationRequestText>
        <ConfirmationRequestFieldText>{plants.join(", ")}</ConfirmationRequestFieldText>
      </InfoContainer>
      
      <ButtonContainer>
        <ButtonComponent
          buttonColor="green"
          buttonText={before?"Aceitar":"Chat"}
          size="small"
          textColor="white"
          stage={before?"RequestConfirmationFinalizar":"Chat"}

        />

        <ButtonComponent
          buttonColor="orange"
          buttonText={before?"Negar":"Finalizar"}
          size="medium"
          textColor="white"
          stage={before?"RequestList":"RequestList"}
        />
      </ButtonContainer>
      

      
    </ConfirmationRequestContainer>
  );
};

export default ConfirmationRequestComponent;