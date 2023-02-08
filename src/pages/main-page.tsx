import { FC } from "react";
import { TextBlock } from "../ui/typography";

export const MainPage: FC = () => {
  return (
    <TextBlock renderTag="h1" size="huge" color="danger">
      this is text block
    </TextBlock>
  );
};
