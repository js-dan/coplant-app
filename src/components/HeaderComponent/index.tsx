import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import { HeaderContainer, HeaderText, ArrowLeft, ShareIcon } from './style';
import Icons from '../../assets/icons/index';

export interface HeaderComponentProps {
  headerText?: string;
  arrowLeft?: string;
  shareIcon?: string;
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const HeaderComponent: React.ElementType<HeaderComponentProps> = ({
  headerText, arrowLeft, shareIcon
}: HeaderComponentProps) => {
  return (
    <HeaderContainer>
       <ArrowLeft arrowLeft={arrowLeft} source={Icons.header.ArrowLeft as ImageSourcePropType} />
       <HeaderText>{headerText}</HeaderText>
       <ShareIcon shareIcon={shareIcon} source={Icons.header.ShareIcon as ImageSourcePropType} />
    </HeaderContainer>
  );
};

export default HeaderComponent;
