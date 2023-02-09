import { ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";
import { Box } from "../ui/box";
import { Button } from "../ui/button";
import { TextBlock } from "../ui/typography";

const InputFileContainer = styled(Box)`
  border: 1px solid red;
`;
const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  /* display: none; */
`;

const InputLabel = styled.label``;

const ImportedImg = styled.canvas``;

export const MainPage: FC = () => {
  const importedImg = useRef<HTMLCanvasElement>(null);
  const onClick = () => console.log("click event!");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length && importedImg.current) {
      const ctx = importedImg.current.getContext("2d");
      const img = new Image();
      img.onload = () => {
        ctx?.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          importedImg.current!.width,
          importedImg.current!.height
        );
      };
      img.src = URL.createObjectURL(files[0]);
    } else {
      console.error("error");
    }
  };

  return (
    <>
      <Button primary onClick={onClick}>
        hello
        <TextBlock renderTag="h1" size="huge" color="danger">
          this is text block
        </TextBlock>
      </Button>
      <InputFileContainer p={10}>
        <InputLabel>
          send file
          <InputFile type="file" onChange={onChange} accept=".jpg" />
        </InputLabel>
      </InputFileContainer>
      <ImportedImg width={500} height={500} ref={importedImg} />
    </>
  );
};
