import { FC } from "react";
import styled from "styled-components";
import { ControlPanel } from "../components/control-panel";
import { ImageEditor } from "../components/img-editor";
import { Box } from "../ui";

const Main = styled(Box)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: minmax(1fr, 100vw);
  grid-template-areas:
    "img-editor"
    "control-panel";
`;

const ImgEditorContainer = styled(ImageEditor)`
  grid-area: img-editor;
`;

const ControlPanelContainer = styled(ControlPanel)`
  grid-area: control-panel;
`;

export const MainPage: FC = () => {
  return (
    <Main>
      <ImgEditorContainer />
      <ControlPanelContainer />
    </Main>
  );
};
