import * as React from "react";
import { ImageSourcePropType } from "react-native";
import {
  PresentCardContainer,
  PresentCardText,
  PresentCardTitle,
  PresentCardRating,
  PresentCardDivider,
  PresentCardStar,
  PresentCardTitleContainer,
  UserImage
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";
import { Divider } from "../DividerComponent/style";

export interface PresentCardComponentProps {
  stars?: number;
  userName?: string;
  userLocation?: string;
}

const PresentCardComponent: React.ElementType<PresentCardComponentProps> = ({
  stars,
  userName,
  userLocation,
}: PresentCardComponentProps) => {
  return (
    <PresentCardContainer>
      {/* <UserImage source={require('../../assets/img/users/'+userName+'.png')}/> */}
      <PresentCardTitleContainer>
        <PresentCardTitle>{userName}</PresentCardTitle>
        <PresentCardRating>
          {[...Array(stars)].map(() => (
            <PresentCardStar source={icons.socialMedia.star} />
          ))}
          <PresentCardDivider/>
          <PresentCardText>{userLocation}</PresentCardText>
        </PresentCardRating>
      </PresentCardTitleContainer>
      
    </PresentCardContainer>
  );
};

export default PresentCardComponent;
