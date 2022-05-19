import {
  MIDDLE_MOD_SIZE,
  CIRCLE_MOD_SIZE,
  LONG_MOD_SIZE,
  NEXT_MOD_SIZE,
  MODULE_GAP,
  MODULE_CONTAINER,
} from "./def-size";
import { getActualSize } from "assets/ts/style/get-actual-size";

// circle
export const getCircleModSize = (baseSize: number) => ({
  size: getActualSize(CIRCLE_MOD_SIZE.OUTER.SIZE, baseSize),
  innerSize: getActualSize(CIRCLE_MOD_SIZE.INNER.SIZE, baseSize),
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
  valveRotateOriginY: getActualSize(
    CIRCLE_MOD_SIZE.HV.LG_RADIUS + CIRCLE_MOD_SIZE.HV.BONE,
    baseSize
  ),
  handRotateOriginY: getActualSize(
    CIRCLE_MOD_SIZE.HV.SM_RADIUS + CIRCLE_MOD_SIZE.HV.BONE,
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
export const getLongLightSize = (baseSize: number) => ({
  height: getActualSize(LONG_MOD_SIZE.LIGHT.HEIGHT, baseSize),
  width: getActualSize(LONG_MOD_SIZE.LIGHT.WIDTH, baseSize),
  left: getActualSize(
    LONG_MOD_SIZE.OUTER.WIDTH - LONG_MOD_SIZE.LIGHT.WIDTH,
    baseSize
  ),
  top: getActualSize(
    (LONG_MOD_SIZE.OUTER.HEIGHT - LONG_MOD_SIZE.LIGHT.HEIGHT) / 2,
    baseSize
  ),
});

// next
export const getNextModSize = (baseSize: number) => ({
  height: getActualSize(NEXT_MOD_SIZE.HEIGHT, baseSize),
  width: getActualSize(NEXT_MOD_SIZE.WIDTH, baseSize),
});

// module container
export const getModContainerSize = (baseSize: number) => ({
  height: getActualSize(MODULE_CONTAINER.HEIGHT, baseSize),
  width: getActualSize(MODULE_CONTAINER.WIDTH, baseSize),
});

// module gap
export const getModuleGap = (baseSize: number): number =>
  getActualSize(MODULE_GAP, baseSize);
