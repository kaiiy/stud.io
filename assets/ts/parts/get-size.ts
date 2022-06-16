import {
  MIDDLE_MOD_SIZE,
  CIRCLE_MOD_SIZE,
  LONG_MOD_SIZE,
  NEXT_MOD_SIZE,
  MODULE_GAP,
  SWITCH_SIZE,
  MODULE_CONTAINER,
} from "./def-size";
import { getActualSize } from "assets/ts/style/get-actual-size";

// circle mod
export const getCircleModSize = (baseSize: number) => ({
  size: getActualSize(CIRCLE_MOD_SIZE.OUTER.SIZE, baseSize),
  innerSize: getActualSize(CIRCLE_MOD_SIZE.INNER.SIZE, baseSize),
  innerRadius: getActualSize(CIRCLE_MOD_SIZE.INNER.SIZE / 2, baseSize),
  margin: getActualSize(
    (CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.INNER.SIZE) / 2,
    baseSize
  ),
});
export const getCircleHvSize = (baseSize: number) => ({
  height: getActualSize(CIRCLE_MOD_SIZE.HV.HEIGHT, baseSize),
  width: getActualSize(CIRCLE_MOD_SIZE.HV.WIDTH, baseSize),
  left: getActualSize(
    (CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.HV.WIDTH) / 2,
    baseSize
  ),
  top: getActualSize(CIRCLE_MOD_SIZE.MIN_MARGIN, baseSize),
  rotateOriginX: getActualSize(CIRCLE_MOD_SIZE.HV.WIDTH / 2, baseSize),
  hvRotateOriginY: getActualSize(
    CIRCLE_MOD_SIZE.HV.LG_RADIUS + CIRCLE_MOD_SIZE.HV.BONE,
    baseSize
  ),
});
export const circleLightSize = (baseSize: number) => ({
  radius: getActualSize(CIRCLE_MOD_SIZE.LIGHT.RADIUS, baseSize),
  margin: getActualSize(CIRCLE_MOD_SIZE.LIGHT.MARGIN, baseSize),
});
export const circlePotTriangleSize = (baseSize: number) => ({
  width: getActualSize(CIRCLE_MOD_SIZE.POT_TRIANGLE.WIDTH, baseSize),
  maxHeight: getActualSize(
    (CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.INNER.SIZE) / 2,
    baseSize
  ),
});

// middle
export const getMiddleModSize = (baseSize: number) => ({
  height: getActualSize(MIDDLE_MOD_SIZE.OUTER.HEIGHT, baseSize),
  width: getActualSize(MIDDLE_MOD_SIZE.OUTER.WIDTH, baseSize),
  innerHeight: getActualSize(MIDDLE_MOD_SIZE.INNER.HEIGHT, baseSize),
  innerWidth: getActualSize(MIDDLE_MOD_SIZE.INNER.WIDTH, baseSize),
  innerTop: getActualSize(
    (MIDDLE_MOD_SIZE.OUTER.HEIGHT - MIDDLE_MOD_SIZE.INNER.HEIGHT) / 2,
    baseSize
  ),
  innerLeft: getActualSize(
    (MIDDLE_MOD_SIZE.OUTER.WIDTH - MIDDLE_MOD_SIZE.INNER.WIDTH) / 2,
    baseSize
  ),
});

// long
export const getLongModSize = (baseSize: number) => ({
  height: getActualSize(LONG_MOD_SIZE.OUTER.HEIGHT, baseSize),
  width: getActualSize(LONG_MOD_SIZE.OUTER.WIDTH, baseSize),
  innerHeight: getActualSize(LONG_MOD_SIZE.INNER.HEIGHT, baseSize),
  innerWidth: getActualSize(LONG_MOD_SIZE.INNER.WIDTH, baseSize),
  innerTop: getActualSize(
    (LONG_MOD_SIZE.OUTER.HEIGHT - LONG_MOD_SIZE.INNER.HEIGHT) / 2,
    baseSize
  ),
  innerLeft: getActualSize(
    (LONG_MOD_SIZE.OUTER.WIDTH - LONG_MOD_SIZE.INNER.WIDTH) / 2,
    baseSize
  ),
});

// next
export const getNextModSize = (baseSize: number) => ({
  height: getActualSize(NEXT_MOD_SIZE.HEIGHT, baseSize),
  width: getActualSize(NEXT_MOD_SIZE.WIDTH, baseSize),
});

// switch
export const switchSize = (baseSize: number) => ({
  height: getActualSize(SWITCH_SIZE.SIZE, baseSize),
  width: getActualSize(SWITCH_SIZE.SIZE, baseSize),
  circleMargin: getActualSize(
    SWITCH_SIZE.SIZE / 2 - SWITCH_SIZE.CIRCLE_RADIUS,
    baseSize
  ),
  circleRadius: getActualSize(SWITCH_SIZE.CIRCLE_RADIUS, baseSize),
});

// module container
export const getModContainerSize = (baseSize: number) => ({
  height: getActualSize(MODULE_CONTAINER.HEIGHT, baseSize),
  width: getActualSize(MODULE_CONTAINER.WIDTH, baseSize),
});

// module gap
export const getModuleGap = (baseSize: number): number =>
  getActualSize(MODULE_GAP, baseSize);
