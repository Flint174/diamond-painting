import { FC } from "react";
import styled from "styled-components";

// const Canvas = styled.canvas`
const Canvas = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: red;
`;

export const ImgEditor: FC = () => <Canvas>canvas</Canvas>;
