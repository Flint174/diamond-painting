import styled from "styled-components";
import { Box, BoxProps, getBoxStyles } from "../../ui/box";
import { FlexBox, FlexBoxProps, getFlexStyles } from "../../ui/flex-box";
import { Button } from "../../ui";
import { FC } from "react";
// import Logo from "../../../public/logo192.png";

import FlagIcon from "../../images/en-gb-flag.svg";
import BurgerIcon from "../../images/burger_button_menu_icon.svg";
import LoginIcon from "../../images/login.svg";

const Header = styled.header<FlexBoxProps & BoxProps>`
  background: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.primaryContent};
  ${getFlexStyles};
  ${getBoxStyles};
`;

export const AppHeader: FC = (props) => {
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
      <Button flat icon={BurgerIcon} onClick={onClick} />
      <Box>Diaomdsiac</Box>
      <FlexBox flex="row" wrap="nowrap" gap={5}>
        <Button flat icon={FlagIcon} iconSize="2rem" dense />
        <Button flat icon={LoginIcon} iconSize="2rem" dense />
      </FlexBox>
    </Header>
  );
};
