import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import star from '../../assets/icons/Nota.png';
import profilePic from '../../assets/icons/Perfil_cuidador.png';

import {
  Item, Infos, Name, ProfileInfos, ProfilePicture, Skills, Icon,
} from './style';

import icons from '../../assets/icons';

export interface CaregiverCardProps {
  name?: string;
  rating?: string;
  district?: string;
  skills?: string;
}

const CaregiverCard: React.ElementType<CaregiverCardProps> = (
  {
    name, rating, district, skills,
  }: CaregiverCardProps,
) => (
  <Item>
    <Icon source={profilePic as ImageSourcePropType} />
    <ProfileInfos>
      <Name>
        {name}
      </Name>
      <Infos>

        {rating}
        {district}
      </Infos>
      <Skills>
        {skills}
      </Skills>
    </ProfileInfos>
  </Item>
);

export default CaregiverCard;
