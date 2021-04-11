import React from 'react';
import { ScreenContainer, View } from './style';

type WithChildren<T = unknown> = T & { children?: React.ReactNode };

const Screen: React.FC<WithChildren> = ({ children }) => (
  <ScreenContainer>
    <View>{children}</View>
  </ScreenContainer>
);

export default Screen;
