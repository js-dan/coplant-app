import * as React from "react";
import { ImageSourcePropType } from "react-native";
import {
  RequestCardActiveContainer,
  RequestCardActiveText,
  RequestCardActiveTitle,
  RequestCardActiveRating,
  RequestCardActiveDivider,
  RequestCardActiveStar,
  RequestCardActiveTitleContainer,
  UserImage,
  RequestCardActiveFinishedText
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";
import { Divider } from "../DividerComponent/style";

export interface RequestCardActiveComponentProps {
  stars?: number;
  userName?: string;
  userLocation?: string;
  startDate?:Date;
  endDate?:Date
  finished?: string
}

const RequestCardActiveComponent: React.ElementType<RequestCardActiveComponentProps> = ({
  stars,
  userName,
  userLocation,
  startDate,
  endDate,
  finished
}: RequestCardActiveComponentProps) => {
  return (
    <RequestCardActiveContainer>
      <UserImage source={require('../../assets/img/users/'+userName+'.png')}/>
      <RequestCardActiveTitleContainer>
        <RequestCardActiveTitle>{userName}</RequestCardActiveTitle>
        <RequestCardActiveRating>
          <RequestCardActiveText>{stars}</RequestCardActiveText>
          <RequestCardActiveStar source={icons.socialMedia.star} />
          <RequestCardActiveDivider/>
          <RequestCardActiveText>{userLocation}</RequestCardActiveText>
        </RequestCardActiveRating>
        <RequestCardActiveText>{startDate.toLocaleDateString()+" até "+endDate.toLocaleDateString()}</RequestCardActiveText>
        <RequestCardActiveFinishedText>{finished}</RequestCardActiveFinishedText>
      </RequestCardActiveTitleContainer>
      
    </RequestCardActiveContainer>
  );
};

export default RequestCardActiveComponent;