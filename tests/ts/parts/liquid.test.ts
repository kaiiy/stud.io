import { correctLiquid4Drawing } from "../../../assets/ts/parts/liquid";

test("liquid overflows", () => {
  const VAL_GREATER_THAN_ONE = (Math.random() + 1) * 1000;
  expect(correctLiquid4Drawing(VAL_GREATER_THAN_ONE)).toBe(1);
});
