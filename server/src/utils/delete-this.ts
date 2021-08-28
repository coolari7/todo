export const add = (...num: number[]): number =>
  num.reduce(
    (total, current) => (isNaN(Number(current)) ? total : total + current),
    0
  );
