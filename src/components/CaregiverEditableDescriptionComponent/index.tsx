import * as React from "react";
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  DescriptionTitleContainer,
} from "./style";

import {EditButtonComponent} from '../'
export interface DescriptionEditableComponentProps {
  description: String;
}

const DescriptionEditableComponent: React.ElementType<DescriptionEditableComponentProps> = ({
  description
}: DescriptionEditableComponentProps) => {
  return (
    <DescriptionContainer>
      <DescriptionTitleContainer>
        <DescriptionTitle> Descrição </DescriptionTitle>
        <EditButtonComponent/>
      </DescriptionTitleContainer>
      <DescriptionText> {description}</DescriptionText>
    </DescriptionContainer>
  );
};

export default DescriptionEditableComponent;
