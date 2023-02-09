import styled, { css } from "styled-components";

export interface BoxProps {
  m?: number;
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  p?: number;
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
}

export const calcSpacing = (
  defaultSpacing: number | string,
  multiplier: number
) => {
  const digitsRegexp = /^[\d.]+/;
  const unitsRegexp = /\D*$/;
  const digits = parseFloat(
    (digitsRegexp.exec(`${defaultSpacing}`) || ["0"])[0] || "0"
  );
  const units = (unitsRegexp.exec(`${defaultSpacing}`) || [""])[0] || "px";
  return `${digits * multiplier}${units}`;
};

export const getBoxStyles = css<BoxProps>((props) => {
  const { defaultSpacing } = props.theme.layout;

  return {
    ...(props.m ? { margin: calcSpacing(defaultSpacing, props.m) } : {}),
    ...(props.mb
      ? { marginBottom: calcSpacing(defaultSpacing, props.mb) }
      : {}),
    ...(props.mt ? { marginTop: calcSpacing(defaultSpacing, props.mt) } : {}),
    ...(props.ml ? { marginLeft: calcSpacing(defaultSpacing, props.ml) } : {}),
    ...(props.mr ? { marginRight: calcSpacing(defaultSpacing, props.mr) } : {}),
    ...(props.p ? { padding: calcSpacing(defaultSpacing, props.p) } : {}),
    ...(props.pb
      ? { paddingBottom: calcSpacing(defaultSpacing, props.pb) }
      : {}),
    ...(props.pt ? { paddingTop: calcSpacing(defaultSpacing, props.pt) } : {}),
    ...(props.pl ? { paddingLeft: calcSpacing(defaultSpacing, props.pl) } : {}),
    ...(props.pr
      ? { paddingRight: calcSpacing(defaultSpacing, props.pr) }
      : {}),
    // ...(props.m ? { margin: `${props.m * digits}${units}` } : {}),
    // ...(props.mb ? { marginBottom: `${props.mb * digits}${units}` } : {}),
    // ...(props.mt ? { marginTop: `${props.mt * digits}${units}` } : {}),
    // ...(props.ml ? { marginLeft: `${props.ml * digits}${units}` } : {}),
    // ...(props.mr ? { marginRight: `${props.mr * digits}${units}` } : {}),
    // ...(props.p ? { padding: `${props.p * digits}${units}` } : {}),
    // ...(props.pb ? { paddingBottom: `${props.pb * digits}${units}` } : {}),
    // ...(props.pt ? { paddingTop: `${props.pt * digits}${units}` } : {}),
    // ...(props.pl ? { paddingLeft: `${props.pl * digits}${units}` } : {}),
    // ...(props.pr ? { paddingRight: `${props.pr * digits}${units}` } : {}),
  };
});

export const Box = styled.div`
  display: block;
  box-sizing: border-box;
  ${getBoxStyles}
`;
