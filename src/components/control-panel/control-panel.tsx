import { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, FlexBox } from "../../ui";
import { ArrowLeft, ArrowRight } from "../../ui/icons";

const Container = styled(FlexBox)`
  border: 1px solid blue;
`;
const TabsSlider = styled(FlexBox)`
  border: 1px solid red;
  max-width: 100vw;
`;
const Tabs = styled(FlexBox)`
  overflow: auto;
`;
const Tab = styled(Box)`
  border: blue;
  padding: 20px;
`;
const Controls = styled(Box)``;

export const ControlPanel: FC = () => {
  return (
    <Container flex="column" items="center" content="flex-start">
      <TabsSlider flex="row">
        <Button icon={ArrowLeft} iconSize="2rem" dense flat />
        <Tabs flex="row" wrap="nowrap">
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
          <Tab>4</Tab>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
          <Tab>4</Tab>
        </Tabs>
        <Button icon={ArrowRight} iconSize="2rem" dense flat />
      </TabsSlider>
      <Controls>
        <Outlet />
      </Controls>
    </Container>
  );
};
