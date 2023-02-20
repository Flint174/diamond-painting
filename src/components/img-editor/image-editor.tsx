import { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/use-store";
import { FlexBox } from "../../ui";

interface CanvasProps {
  containerHeight?: number;
  containerWidth?: number;
}

interface Dimentions {
  height: number;
  width: number;
}

const Container = styled(FlexBox)`
  max-width: 100%;
  max-height: 100%;
`;

const Canvas = styled.canvas<CanvasProps>`
  margin: 0;
  padding: 0;
  max-width: ${(p) => p.containerWidth}px;
  max-height: ${(p) => p.containerHeight}px;
  border: 0.125rem solid white;
  border-radius: 1rem;
`;

export const ImageEditor: FC = () => {
  const { src } = useAppSelector((store) => store.imageReducer);
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [dimentions, setDimentions] = useState<Dimentions>({
    height: 0,
    width: 0,
  });

  const redraw = useCallback(() => {
    if (src && canvas.current) {
      const ctx = canvas.current.getContext("2d");
      const img = new Image();
      img.onload = () => {
        if (canvas.current && container.current) {
          const k = Math.min(
            container.current.offsetWidth / img.width,
            container.current.offsetHeight / img.height
          );
          const width = img.width * k;
          const height = img.height * k;
          canvas.current.width = width;
          canvas.current.height = height;
          ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
          setDimentions({ height, width });
        }
      };
      img.src = src;
    }
  }, [src]);

  //   useEffect(() => {
  //     console.log("set listener");
  //     const listener = () => {
  //       console.log("resize");
  //       redraw();
  //     };
  //     window.addEventListener("resize", listener, true);
  //     return window.removeEventListener("resize", listener);
  //   }, [redraw]);

  useEffect(() => {
    redraw();
    // if (src && canvas.current) {
    //   const ctx = canvas.current.getContext("2d");
    //   const img = new Image();
    //   img.onload = () => {
    //     if (canvas.current && container.current) {
    //       const k = Math.min(
    //         container.current.offsetWidth / img.width,
    //         container.current.offsetHeight / img.height
    //       );
    //       const width = img.width * k;
    //       const height = img.height * k;
    //       canvas.current.width = width;
    //       canvas.current.height = height;
    //       ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
    //       setDimentions({ height, width });
    //     }
    //   };
    //   img.src = src;
    // }
  }, [redraw]);

  return (
    <Container
      ref={container}
      m={3}
      flex="column"
      items="center"
      justify="center"
    >
      <Canvas
        ref={canvas}
        // height={dimentions.height}
        // width={dimentions.width}
        containerHeight={dimentions.height}
        containerWidth={dimentions.width}
      />
    </Container>
  );
};
