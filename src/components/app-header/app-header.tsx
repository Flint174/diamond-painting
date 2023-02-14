import styled from "styled-components";
import { Box, BoxProps, getBoxStyles } from "../../ui/box";
import { FlexBox, FlexBoxProps, getFlexStyles } from "../../ui/flex-box";
import { Button, BurgerIcon, TextBlock, EnGbFlag } from "../../ui";

const Header = styled.header<FlexBoxProps & BoxProps>`
  /* background-color: ${(p) => p.theme.colors.background}; */
  background-color: yellow;
  ${getFlexStyles};
  ${getBoxStyles};
`;

const FlatButton = styled(Button)`
  /* margin: 0; */
  padding: 0;
`;

export const AppHeader = () => {
  const onClick = () => {
    console.log("click!");
  };
  return (
    <Header
      flex="row"
      items="center"
      justify="space-between"
      wrap="nowrap"
      color="primary"
    >
      <FlatButton onClick={onClick}>
        <BurgerIcon />
      </FlatButton>
      <TextBlock renderTag="h1">Diaomdsiac</TextBlock>
      <FlexBox flex="row" wrap="nowrap">
        <FlatButton primary>
          <EnGbFlag />
        </FlatButton>
        <FlatButton>2</FlatButton>
      </FlexBox>
    </Header>
  );
};
