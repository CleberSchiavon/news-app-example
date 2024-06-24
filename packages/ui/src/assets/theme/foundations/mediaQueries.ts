export const breakpointSizes = {
  XXS: 360,
  XS: 768,
  MD: 991,
  LG: 1024,
  XL: 1200,
  XXL: 1440,
};

type SizesAbbr = keyof typeof breakpointSizes;
type MinKeys = `min${SizesAbbr}`;
type MaxKeys = `max${SizesAbbr}`;

export type Breakpoints = {
  [K in MinKeys | MaxKeys]: string;
};

const breakpoints: Partial<Breakpoints> = {};

Object.entries(breakpointSizes).forEach(([sizeName, size]) => {
  breakpoints[`min${sizeName}` as MinKeys] = `(min-width: ${size}px)`;
  breakpoints[`max${sizeName}` as MaxKeys] = `(max-width: ${size + 1}px)`;
});

export type BreakpointsNames = keyof Breakpoints;

export type ValuesWithBreakpoints<T> = Partial<Record<BreakpointsNames, T>>;

export default breakpoints as Breakpoints;
