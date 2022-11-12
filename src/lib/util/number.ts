import BigNumber from "bignumber.js";

export function formatNumber(
  value: number,
  decimalsAmount: number,
  decimalPlaces: number
): string {
  const n = new BigNumber(value);
  const exx = new BigNumber(Math.pow(10, decimalsAmount * -1 - 1));
  return n.multipliedBy(exx).toFormat(decimalPlaces);
}
