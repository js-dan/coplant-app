import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import star from '../../assets/icons/Nota.png';
import profilePic from '../../assets/icons/Perfil_cuidador.png';

import {
  Item, Infos, Name, ProfileInfos, Skills, Icon,
} from './style';

import icons from '../../assets/icons';
import TagComponent from '../TagComponent';

export interface CaregiverCardProps {
  name?: string;
  rating?: string;
  district?: string;
  skill1?: string;
  skill2?: string;
  skill3?: string;
}

const CaregiverCard: React.ElementType<CaregiverCardProps> = (
  {
    name, rating, district, skill1, skill2, skill3,
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
);

export default CaregiverCard;
