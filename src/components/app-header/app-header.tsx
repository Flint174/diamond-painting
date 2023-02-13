import styled from "styled-components";
import { Box, BoxProps, getBoxStyles } from "../../ui/box";
import { FlexBox, FlexBoxProps, getFlexStyles } from "../../ui/flex-box";

const Header = styled.header<FlexBoxProps & BoxProps>`
  ${getFlexStyles};
  ${getBoxStyles};
`;
const Item = styled(Box)`
  border: 1px solid green;
`;

export const AppHeader = () => (
  <Header>
    <FlexBox direction="row" gap={5}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
    </FlexBox>
  </Header>
);
