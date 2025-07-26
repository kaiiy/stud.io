import { convertDeg2Rad, convertRad2Deg } from "@/assets/ts/math/angle";
import { diffVec, getAngle, type Vec } from "@/assets/ts/math/vec";

/**
 * @param circleCenter
 * @param mousePos
 * @returns 0 <= val < 2*pi
 */
const hvAngle = (circleCenter: Vec, mousePos: Vec) => {
  const innerTopMidpoint: Vec = {
    x: circleCenter.x,
    y: 0,
  };
  const mouseVec = diffVec(mousePos, circleCenter);
  const angleSize = getAngle(diffVec(innerTopMidpoint, circleCenter), mouseVec);

  if (mouseVec.x >= 0) return angleSize;
  return 2 * Math.PI - angleSize;
};

/**
 * @param actualHvAngleRad 0 <= val < 2*pi
 */
const adjustHvAngle = (actualHvAngleRad: number) => {
  const hvAngleDeg = convertRad2Deg(actualHvAngleRad);

  const BUFFER_ANGLE_DEG = 7;
  if (0 <= hvAngleDeg && hvAngleDeg <= BUFFER_ANGLE_DEG) return 0;
  if (360 - BUFFER_ANGLE_DEG <= hvAngleDeg && hvAngleDeg <= 360) return 0;

  return actualHvAngleRad;
};

const adjustHvAngleForTimer = (actualHvAngleRad: number) => {
  const hvAngleDeg = convertRad2Deg(actualHvAngleRad);
  const BUFFER_ANGLE_DEG = 30;
  const TARGET_ANGLE_DEG = 180;

  if (
    TARGET_ANGLE_DEG - BUFFER_ANGLE_DEG <= hvAngleDeg &&
    hvAngleDeg <= TARGET_ANGLE_DEG + BUFFER_ANGLE_DEG
  ) return convertDeg2Rad(TARGET_ANGLE_DEG);

  return actualHvAngleRad;
};

export const hvAngleFromMouse = (
  mouseRelativePos: Vec,
  circleCenter: Vec,
  isTimer: boolean,
): number => {
  const actualHvAngleVal = hvAngle(circleCenter, mouseRelativePos);
  const hvAngleVal = adjustHvAngle(actualHvAngleVal);

  if (isTimer) {
    return adjustHvAngleForTimer(hvAngleVal);
  }

  return hvAngleVal;
};
