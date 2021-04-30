import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import { PromotionContainer, HeaderText,BodyText, PromotionLeftContainer, PromotionRightContainer,PromotionIcon } from './style';
import Icons from '../../assets/icons/index';

export interface PromotionComponentProps {
  headerText?: string;
  bodyText?: string;
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const PromotionComponent: React.ElementType<PromotionComponentProps> = ({
  headerText, bodyText
}: PromotionComponentProps) => {
  return (
    <PromotionContainer>
        <PromotionLeftContainer>
            <PromotionIcon source={Icons.promotion.Promotion as ImageSourcePropType}></PromotionIcon>
        </PromotionLeftContainer>
        <PromotionRightContainer>
            <HeaderText>{headerText}</HeaderText>
            <BodyText>{bodyText}</BodyText>
        </PromotionRightContainer>
    </PromotionContainer>
  );
};

export default PromotionComponent;
