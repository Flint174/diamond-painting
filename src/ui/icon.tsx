import { FC } from "react";
import styled from "styled-components";
import { TypographySize, TypographySizeProps } from "./typography";

interface IconProps {
  size: string;
  src: string;
  alt?: string;
}

const StyledIcon = styled.img<IconProps>`
  width: ${(p) => p.size};
  height: ${(p) => p.size};
`;

export const Icon: FC<IconProps> = ({ src, alt, size }) => {
  console.log("icon size", size);
  return <StyledIcon srcSet={src} alt={alt} src={src} size={size} />;
};
