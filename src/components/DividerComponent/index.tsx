import * as React from "react";
import { Divider } from "./style";

export interface DescriptionComponentProps {
  description?: String;
}

const DividerComponent: React.ElementType<DescriptionComponentProps> = ({
  description,
}: DescriptionComponentProps) => {
  return <Divider />;
};

export default DividerComponent;
