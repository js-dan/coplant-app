import * as React from "react";
import { ImageSourcePropType } from "react-native";
import profilePic from '../../assets/img/users/LizMachado.png';
import { useNavigation } from '@react-navigation/native'; 
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
  const navigation=useNavigation();
  const onPress = () => {navigation.navigate("RequestConfirmationFinalizar", {userName:userName, userLocation:userLocation, startDate:startDate, endDate:endDate, stars:stars})}
  return (
    <RequestCardContainer onPress={onPress}>
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