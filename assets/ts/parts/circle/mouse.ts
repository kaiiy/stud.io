import { Vec } from "@/assets/ts/math/vec";
import { isUndefined } from "@/assets/ts/utils/is-undefined";
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

export const getMousePos = (mouseHtmlId: string): Vec => {
  const mouseAreaBound = document
    .getElementById(mouseHtmlId)
    ?.getBoundingClientRect();
  if (isUndefined(mouseAreaBound)) throw new Error("can't get mouse area");

  const mousePos = {
    x: mouseAreaBound?.left ?? 0,
    y: mouseAreaBound?.top ?? 0,
  };
  return mousePos;
};
