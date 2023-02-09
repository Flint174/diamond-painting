import { FC } from "react";
import { Button } from "../ui/button";
import { TextBlock } from "../ui/typography";

export const MainPage: FC = () => {
  const onClick = () => console.log("click event!");
  return (
    <Button primary onClick={onClick}>
      hello
      <TextBlock renderTag="h1" size="huge" color="danger">
        this is text block
      </TextBlock>
    </Button>
  );
};
