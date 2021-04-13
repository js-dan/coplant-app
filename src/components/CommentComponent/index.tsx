import * as React from "react";
import { ImageSourcePropType } from "react-native";

import { CommentContainer, CommentText, Icon } from "./style";

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
      <CommentText>{usersName}</CommentText>
      <CommentText>{stars}</CommentText>
      <CommentText>{usersComment}</CommentText>
    </CommentContainer>
  );
};

export default CommentComponent;
