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
