import { calculateDrawingPx } from "assets/ts/style/get-actual-size";
import {
  CIRCLE_MOD_SIZE,
  COVER_MOD_SIZE,
  LONG_MOD_SIZE,
  MIDDLE_MOD_SIZE,
  MODULE_CONTAINER,
  MODULE_GAP,
  NEXT_MOD_SIZE,
  SWITCH_SIZE,
} from "./def-size";

// circle mod
export const getCircleModSize = (baseSize: number) => ({
  size: calculateDrawingPx(CIRCLE_MOD_SIZE.OUTER.SIZE, baseSize),
  innerSize: calculateDrawingPx(CIRCLE_MOD_SIZE.INNER.SIZE, baseSize),
  innerRadius: calculateDrawingPx(CIRCLE_MOD_SIZE.INNER.SIZE / 2, baseSize),
  margin: calculateDrawingPx(
    (CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.INNER.SIZE) / 2,
    baseSize,
  ),
});
export const getCircleHvSize = (baseSize: number) => ({
  height: calculateDrawingPx(CIRCLE_MOD_SIZE.HV.HEIGHT, baseSize),
  width: calculateDrawingPx(CIRCLE_MOD_SIZE.HV.WIDTH, baseSize),
  left: calculateDrawingPx(
    (CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.HV.WIDTH) / 2,
    baseSize,
  ),
  top: calculateDrawingPx(CIRCLE_MOD_SIZE.MIN_MARGIN, baseSize),
  rotateOriginX: calculateDrawingPx(CIRCLE_MOD_SIZE.HV.WIDTH / 2, baseSize),
  hvRotateOriginY: calculateDrawingPx(
    CIRCLE_MOD_SIZE.HV.LG_RADIUS + CIRCLE_MOD_SIZE.HV.BONE,
    baseSize,
  ),
});
export const circleLightSize = (baseSize: number) => ({
  radius: calculateDrawingPx(CIRCLE_MOD_SIZE.LIGHT.RADIUS, baseSize),
  margin: calculateDrawingPx(CIRCLE_MOD_SIZE.LIGHT.MARGIN, baseSize),
});
export const circlePotTriangleSize = (baseSize: number) => ({
  width: calculateDrawingPx(CIRCLE_MOD_SIZE.POT_TRIANGLE.WIDTH, baseSize),
  maxHeight: calculateDrawingPx(
    (CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.INNER.SIZE) / 2,
    baseSize,
  ),
});

// middle
export const coverModSize = (baseSize: number) => ({
  height: calculateDrawingPx(COVER_MOD_SIZE.HEIGHT, baseSize),
  width: calculateDrawingPx(COVER_MOD_SIZE.WIDTH, baseSize),
});
export const getMiddleModSize = (baseSize: number) => ({
  height: calculateDrawingPx(MIDDLE_MOD_SIZE.OUTER.HEIGHT, baseSize),
  width: calculateDrawingPx(MIDDLE_MOD_SIZE.OUTER.WIDTH, baseSize),
  innerHeight: calculateDrawingPx(MIDDLE_MOD_SIZE.INNER.HEIGHT, baseSize),
  innerWidth: calculateDrawingPx(MIDDLE_MOD_SIZE.INNER.WIDTH, baseSize),
  innerTop: calculateDrawingPx(
    (MIDDLE_MOD_SIZE.OUTER.HEIGHT - MIDDLE_MOD_SIZE.INNER.HEIGHT) / 2,
    baseSize,
  ),
  innerLeft: calculateDrawingPx(
    (MIDDLE_MOD_SIZE.OUTER.WIDTH - MIDDLE_MOD_SIZE.INNER.WIDTH) / 2,
    baseSize,
  ),
});
export const getNoodleSize = (baseSize: number) => ({
  height: calculateDrawingPx(MIDDLE_MOD_SIZE.NOODLE.HEIGHT, baseSize),
  width: calculateDrawingPx(MIDDLE_MOD_SIZE.NOODLE.WIDTH, baseSize),
});

// long
export const getLongModSize = (baseSize: number) => ({
  height: calculateDrawingPx(LONG_MOD_SIZE.OUTER.HEIGHT, baseSize),
  width: calculateDrawingPx(LONG_MOD_SIZE.OUTER.WIDTH, baseSize),
  innerHeight: calculateDrawingPx(LONG_MOD_SIZE.INNER.HEIGHT, baseSize),
  innerWidth: calculateDrawingPx(LONG_MOD_SIZE.INNER.WIDTH, baseSize),
  innerTop: calculateDrawingPx(
    (LONG_MOD_SIZE.OUTER.HEIGHT - LONG_MOD_SIZE.INNER.HEIGHT) / 2,
    baseSize,
  ),
  innerLeft: calculateDrawingPx(
    (LONG_MOD_SIZE.OUTER.WIDTH - LONG_MOD_SIZE.INNER.WIDTH) / 2,
    baseSize,
  ),
  numVerticalMargin: calculateDrawingPx(
    LONG_MOD_SIZE.NUM_MARGIN.VERTICAL,
    baseSize,
  ),
  numHorizontalMargin: calculateDrawingPx(
    LONG_MOD_SIZE.NUM_MARGIN.HORIZONTAL,
    baseSize,
  ),
  numSize: calculateDrawingPx(LONG_MOD_SIZE.NUM_SIZE, baseSize),
});

// next
export const getNextModSize = (baseSize: number) => ({
  height: calculateDrawingPx(NEXT_MOD_SIZE.HEIGHT, baseSize),
  width: calculateDrawingPx(NEXT_MOD_SIZE.WIDTH, baseSize),
});

// switch
export const switchSize = (baseSize: number) => ({
  height: calculateDrawingPx(SWITCH_SIZE.SIZE, baseSize),
  width: calculateDrawingPx(SWITCH_SIZE.SIZE, baseSize),
  circleMargin: calculateDrawingPx(
    SWITCH_SIZE.SIZE / 2 - SWITCH_SIZE.CIRCLE_RADIUS,
    baseSize,
  ),
  circleRadius: calculateDrawingPx(SWITCH_SIZE.CIRCLE_RADIUS, baseSize),
});

// module container
export const getModContainerSize = (baseSize: number) => ({
  height: calculateDrawingPx(MODULE_CONTAINER.HEIGHT, baseSize),
  width: calculateDrawingPx(MODULE_CONTAINER.WIDTH, baseSize),
});

// module gap
export const getModuleGap = (baseSize: number): number =>
  calculateDrawingPx(MODULE_GAP, baseSize);
