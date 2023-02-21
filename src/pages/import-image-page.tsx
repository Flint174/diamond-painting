import { ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/use-store";
import { FlexBox } from "../ui/flex-box";
import { setImage } from "../services/slices/image-slice";
import { useNavigate } from "react-router-dom";
import { EDIT_IMAGE_ROUTE } from "../utils/constants/routes";
import { Button } from "../ui";

const Main = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;
const ImportFile = styled.input`
  z-index: -1;
  position: absolute;
  opacity: 0;
`;

export const ImportImagePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const input = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      dispatch(setImage(URL.createObjectURL(files[0])));
      navigate(EDIT_IMAGE_ROUTE);
    }
  };
  const onClick = () => {
    input.current?.click();
  };
  return (
    <Main flex="column" items="center" justify="center">
      <Button
        primary
        label="LOAD"
        size="large"
        pl={10}
        pr={10}
        pt={3}
        pb={3}
        onClick={onClick}
      />
      <ImportFile ref={input} type="file" onChange={onChange} />
    </Main>
  );
};
