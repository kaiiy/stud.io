import { type Vec } from "@/assets/ts/math/vec";
// html id (str can be anything)
export const MOUSE_AREA_ID = "mouse_area_id";

export const getCircleCenterPos = (RectSize: number): Vec => ({
  x: RectSize / 2,
  y: RectSize / 2,
});
