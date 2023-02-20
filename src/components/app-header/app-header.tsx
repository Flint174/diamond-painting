import styled from "styled-components";
import {
  BurgerIcon,
  EnGbFlag,
  TextBlock,
  // BoxProps,
  // getBoxStyles
} from "../../ui";
import { FlexBox, FlexBoxProps, getFlexStyles } from "../../ui/flex-box";
import { Button } from "../../ui";
import { FC } from "react";
import { LoginIcon } from "../../ui/icons";

const Header = styled.header<FlexBoxProps>`
  background: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.primaryContent};
  width: 100%;
  ${getFlexStyles}
`;

const Title = styled(FlexBox)``;

export const AppHeader: FC = (props) => {
  const onClick = () => {
    console.log("click!");
  };
  return (
    <Header color="primary" flex="row" items="center">
      <Title flex="row" items="center" justify="flex-start" grow={1} p={3}>
        <TextBlock size="medium" color="inherit">
          Diamodsaic
        </TextBlock>
      </Title>
      <Button flat dense icon={EnGbFlag} iconSize="3rem" onClick={onClick} />
      <Button flat dense icon={LoginIcon} iconSize="3rem" onClick={onClick} />
      <Button flat icon={BurgerIcon} iconSize="1.5rem" onClick={onClick} />
    </Header>
  );
};
