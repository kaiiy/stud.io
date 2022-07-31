import { Vec } from "@/assets/ts/math/vec";
// html id (str can be anything)
export const MOUSE_AREA_ID = "mouse_area_id";

export const getMouseRelativePos = (
  ev: MouseEvent,
  mouseAreaPos: Vec
): Vec => ({
  x: ev.clientX - mouseAreaPos.x,
  y: ev.clientY - mouseAreaPos.y,
});

export const getCircleCenterPos = (RectSize: number): Vec => ({
  x: RectSize / 2,
  y: RectSize / 2,
});
