import * as React from "react";
import {ImageSourcePropType} from "react-native";
import {
  PlantContainer,
  PlantText,
  PlantImage,
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";


export interface PlantComponentProps {
  qtd?: number;
  name?: string;
}

const PlantComponent: React.ElementType<PlantComponentProps> = ({
  qtd,
  name
}: PlantComponentProps) => {
  return (
    <PlantContainer>
      {name && (<PlantImage source={require('../../assets/img/plants/'+name+'.png')}/>)}
      <PlantText>{qtd+'x '+name}</PlantText>
    </PlantContainer>
  );
};

export default PlantComponent;
