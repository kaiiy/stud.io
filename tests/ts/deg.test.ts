import { calcMouseDeg } from "../../assets/ts/parts/cover"

test("calcMouseDeg", () => {
  expect(calcMouseDeg({ x: 0, y: 90 }, { x: 100, y: 100 })).toBe(-90);
});
