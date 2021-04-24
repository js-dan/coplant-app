import * as React from "react";
import { ImageSourcePropType } from "react-native";
import {
  CommentContainer,
  CommentText,
  CommentTitle,
  CommentRating,
  CommentDivider,
  CommentStar,
} from "./style";

import theme from "../../assets/theme";
import icons from "../../assets/icons";

export interface CommentComponentProps {
  stars?: number;
  usersName?: string;
  usersComment?: string;
}

const CommentComponent: React.ElementType<CommentComponentProps> = ({
  stars,
  usersName,
  usersComment,
}: CommentComponentProps) => {
  return (
    <CommentContainer>
      <CommentTitle>{usersName}</CommentTitle>
      <CommentRating>
        <CommentTitle>{stars}</CommentTitle>
        <CommentDivider />
        {[...Array(stars)].map(() => (
          <CommentStar source={icons.socialMedia.star} />
        ))}
      </CommentRating>
      <CommentText>{usersComment}</CommentText>
    </CommentContainer>
  );
};

export default CommentComponent;
