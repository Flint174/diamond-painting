import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/use-store";
import { FlexBox } from "../ui/flex-box";
import { TextBlock } from "../ui/typography";
import { setImage } from "../services/slices/image-slice";
import { useNavigate } from "react-router-dom";
import { EDIT_IMAGE_ROUTE } from "../utils/constants/routes";
import { Box } from "../ui";

const Main = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;
const ImportFile = styled.input`
  z-index: -1;
  position: absolute;
  opacity: 0;
`;

const ImportButton = styled(Box)`
  border: 1px solid black;
`;

export const ImportImagePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //   const importedImg = useRef<HTMLCanvasElement>(null);
  //   const onClick = () => console.log("click event!");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      dispatch(setImage(URL.createObjectURL(files[0])));
      navigate(EDIT_IMAGE_ROUTE);
    }
    // if (files?.length && importedImg.current) {
    //   const ctx = importedImg.current.getContext("2d");
    //   const img = new Image();
    //   img.onload = () => {
    //     ctx?.drawImage(
    //       img,
    //       0,
    //       0,
    //       img.width,
    //       img.height,
    //       0,
    //       0,
    //       importedImg.current!.width,
    //       importedImg.current!.height
    //     );
    //   };
    //   img.src = URL.createObjectURL(files[0]);
    // } else {
    //   console.error("error");
    // }
  };
  return (
    <Main flex="column" items="center" justify="center">
      <ImportButton p={5}>
        <TextBlock renderTag="label">
          Import File
          <ImportFile type="file" onChange={onChange} />
        </TextBlock>
      </ImportButton>
    </Main>
  );
};
