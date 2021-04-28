import * as React from 'react';
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
} from './style';

export interface DescriptionComponentProps {
  description: String;
}

const DescriptionComponent: React.ElementType<DescriptionComponentProps> = ({
  description,
}: DescriptionComponentProps) => (
  <DescriptionContainer>
    <DescriptionTitle> Descrição </DescriptionTitle>
    <DescriptionText>
      {' '}
      {description}
    </DescriptionText>
  </DescriptionContainer>
);

export default DescriptionComponent;
