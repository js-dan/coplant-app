import * as React from "react";
import { ImageSourcePropType } from "react-native";
import profilePic from '../../assets/img/users/LizMachado.png';
import {
  RequestCardContainer,
  RequestCardText,
  RequestCardTitle,
  RequestCardRating,
  RequestCardDivider,
  RequestCardStar,
  RequestCardTitleContainer,
  UserImage,
  RequestCardFinishedText
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";
import { Divider } from "../DividerComponent/style";

export interface RequestCardComponentProps {
  stars?: number;
  userName?: string;
  userLocation?: string;
  startDate?:Date;
  endDate?:Date
  finished?: string
}

const RequestCardComponent: React.ElementType<RequestCardComponentProps> = ({
  stars,
  userName,
  userLocation,
  startDate,
  endDate,
  finished
}: RequestCardComponentProps) => {
  return (
    <RequestCardContainer>
      <UserImage source={profilePic as ImageSourcePropType}/>
      <RequestCardTitleContainer>
        <RequestCardTitle>{userName}</RequestCardTitle>
        <RequestCardRating>
          <RequestCardText>{stars}</RequestCardText>
          <RequestCardStar source={icons.socialMedia.star} />
          <RequestCardDivider/>
          <RequestCardText>{userLocation}</RequestCardText>
        </RequestCardRating>
        <RequestCardText>{startDate.toLocaleDateString()+" até "+endDate.toLocaleDateString()}</RequestCardText>
        <RequestCardFinishedText>{finished}</RequestCardFinishedText>
      </RequestCardTitleContainer>
      
    </RequestCardContainer>
  );
};

export default RequestCardComponent;