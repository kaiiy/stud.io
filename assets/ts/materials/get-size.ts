import { MIDDLE_MOD_SIZE } from "./def-size"

export const getMiddleModSize = (baseSize: number) => (
    {
        height: baseSize * MIDDLE_MOD_SIZE.OUTER.HEIGHT,
        width: baseSize * MIDDLE_MOD_SIZE.OUTER.WIDTH,
        innerHeight: baseSize * MIDDLE_MOD_SIZE.INNER.HEIGHT,
        innerWidth: baseSize * MIDDLE_MOD_SIZE.INNER.WIDTH,
        innerTop: (MIDDLE_MOD_SIZE.OUTER.HEIGHT - MIDDLE_MOD_SIZE.INNER.HEIGHT) / 2 * baseSize,
        innerLeft: (MIDDLE_MOD_SIZE.OUTER.WIDTH - MIDDLE_MOD_SIZE.INNER.WIDTH) / 2 * baseSize
    }
)
