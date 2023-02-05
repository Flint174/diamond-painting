import { FC } from "react";
import styled from "styled-components";

const StyledDiv = styled.div((props) => ({
  border: "solid 1px red",
  borderRadius: "10px",
  width: "100px",
  color: props.theme.colors.secondary,
  ":hover": { color: "red" },
}));

export const MainPage: FC = () => {
  return <StyledDiv>MainPage</StyledDiv>;
};
