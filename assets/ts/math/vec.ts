export type Vec = {
  x: number;
  y: number;
};

const getVecSize = (a: Vec) => Math.sqrt(a.x ** 2 + a.y ** 2);

/**
 *
 * @param a
 * @param b
 * @returns 0 <= val <= pi
 */
export const getAngle = (a: Vec, b: Vec): number =>
  Math.acos((a.x * b.x + a.y * b.y) / (getVecSize(a) * getVecSize(b)));

export const diffVec = (a: Vec, b: Vec): Vec => ({
  x: a.x - b.x,
  y: a.y - b.y,
});
