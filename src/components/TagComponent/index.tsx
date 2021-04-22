import * as React from 'react';
import { TagContainer, TagText} from './style';

export interface TagComponentProps {
  text: string;
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const TagComponent: React.ElementType<TagComponentProps> = ({
    text
}: TagComponentProps) => {
  return (
    <TagContainer>
     <TagText>{text}</TagText>
    </TagContainer>
  );
};

export default TagComponent;

