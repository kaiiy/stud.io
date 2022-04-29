import { MIDDLE_MOD_SIZE, CIRCLE_MOD_SIZE, LONG_MOD_SIZE } from "./def-size"
import { getActualSize } from "assets/ts/style/get-actual-size"

export const getMiddleModSize = (baseSize: number) => (
    {
        height: getActualSize(MIDDLE_MOD_SIZE.OUTER.HEIGHT, baseSize),
        width: getActualSize(MIDDLE_MOD_SIZE.OUTER.WIDTH, baseSize),
        innerHeight: getActualSize(MIDDLE_MOD_SIZE.INNER.WIDTH, baseSize),
        innerWidth: getActualSize(MIDDLE_MOD_SIZE.INNER.WIDTH, baseSize),
        innerTop: getActualSize((MIDDLE_MOD_SIZE.OUTER.HEIGHT - MIDDLE_MOD_SIZE.INNER.HEIGHT) / 2, baseSize),
        innerLeft: getActualSize((MIDDLE_MOD_SIZE.OUTER.WIDTH - MIDDLE_MOD_SIZE.INNER.WIDTH) / 2, baseSize),
    }
)

// circle 
export const getCircleModSize = (baseSize: number) => (
    {
        size: getActualSize(CIRCLE_MOD_SIZE.OUTER.SIZE, baseSize),
        innerSize: getActualSize(CIRCLE_MOD_SIZE.INNER.SIZE, baseSize),
    }
)
export const getCircleValveSize = (baseSize: number) => (
    {
        height: getActualSize(CIRCLE_MOD_SIZE.VALVE.HEIGHT, baseSize),
        left: getActualSize((CIRCLE_MOD_SIZE.OUTER.SIZE - CIRCLE_MOD_SIZE.VALVE.WIDTH) / 2, baseSize),
        top: getActualSize(CIRCLE_MOD_SIZE.MIN_MARGIN, baseSize),
    }
)

// long 
export const getLongModSize = (baseSize: number) => (
    {
        height: getActualSize(LONG_MOD_SIZE.OUTER.HEIGHT, baseSize),
        width: getActualSize(LONG_MOD_SIZE.OUTER.WIDTH, baseSize),
        innerHeight: getActualSize(LONG_MOD_SIZE.INNER.HEIGHT, baseSize),
        innerWidth: getActualSize(LONG_MOD_SIZE.INNER.WIDTH, baseSize),
        innerTop: getActualSize((LONG_MOD_SIZE.OUTER.HEIGHT - LONG_MOD_SIZE.INNER.HEIGHT) / 2, baseSize),
        innerLeft: getActualSize((LONG_MOD_SIZE.OUTER.WIDTH - LONG_MOD_SIZE.INNER.WIDTH) / 2, baseSize),
    }
)
export const getLongLightSize = (baseSize: number) => (
    {
        height: getActualSize(LONG_MOD_SIZE.LIGHT.HEIGHT, baseSize),
        width: getActualSize(LONG_MOD_SIZE.LIGHT.WIDTH, baseSize),
        left: getActualSize(LONG_MOD_SIZE.OUTER.WIDTH - LONG_MOD_SIZE.LIGHT.WIDTH, baseSize),
        top: getActualSize((LONG_MOD_SIZE.OUTER.HEIGHT - LONG_MOD_SIZE.LIGHT.HEIGHT) / 2, baseSize)
    }
)
