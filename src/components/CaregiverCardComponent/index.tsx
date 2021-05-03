import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import star from '../../assets/icons/Nota.png';
import profilePic from '../../assets/icons/Perfil_cuidador.png';

import {
  Item, Infos, Name, ProfileInfos, Skills, Icon,
} from './style';

import icons from '../../assets/icons';
import TagComponent from '../TagComponent';
import { useNavigation } from '@react-navigation/core';
import { PresentCardDivider, PresentCardRating, PresentCardStar, PresentCardText } from '../PresentCardComponent/style';

export interface CaregiverCardProps {
  name?: string;
  rating?: number;
  district?: string;
  skill1?: string;
  skill2?: string;
  skill3?: string;
  userImage: string
}

const images = {
  liz: require("../../assets/img/users/LizAndrade.png"),
  caio: require("../../assets/img/users/CaioAndrade.png"),
  ligia: require("../../assets/img/users/ligia.png"),
  claudia: require("../../assets/img/users/claudia.png"),
  a: require("../../assets/img/users/a.png"),
  b: require("../../assets/img/users/b.png"),
  c: require("../../assets/img/users/c.png")
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
    case "c":
      return images.c
    case "b":
      return images.b
    case "a":
      return images.a
  }
}

const CaregiverCard: React.ElementType<CaregiverCardProps> = (
  {name, rating, district, skill1, skill2, skill3, userImage}: CaregiverCardProps,) => {
    const navigation = useNavigation()

    return (
      <Item onPress={() => {navigation.navigate("Cuidador", {name: name, rating: rating})}}>
        <Icon source={getImage(userImage) as ImageSourcePropType} />
        <ProfileInfos>
          <Name>
            {name}
          </Name>
          <PresentCardRating>
            {[...Array(rating)].map((index) => (
              <PresentCardStar key={index} source={icons.socialMedia.star} />
            ))}
            <PresentCardDivider />
            <PresentCardText>{district}</PresentCardText>
          </PresentCardRating>
          <Skills>
            <TagComponent
              text={skill1}
            />
            <TagComponent
              text={skill2}
            />
            <TagComponent
              text={skill3}
            />
          </Skills>
        </ProfileInfos>
      </Item>
    )
};

export default CaregiverCard;
