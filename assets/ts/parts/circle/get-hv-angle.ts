import { getAngle, Vec, diffVec } from "@/assets/ts/math/vec";
import { convertRad2Deg } from "@/assets/ts/math/angle";

/**
 *
 * @param innerTopMidpoint
 * @param circleCenter
 * @param mousePos
 * @returns 0 <= val < 2*pi
 */
const hvAngle = (innerTopMidpoint: Vec, circleCenter: Vec, mousePos: Vec) => {
  const mouseVec = diffVec(mousePos, circleCenter);
  const angleSize = getAngle(diffVec(innerTopMidpoint, circleCenter), mouseVec);

  if (mouseVec.x >= 0) return angleSize;
  return 2 * Math.PI - angleSize;
};

/**
 *
 * @param actualHvAngleRad 0 <= val < 2*pi
 */
const adjustHvAngle = (actualHvAngleRad: number) => {
  const hvAngleDeg = convertRad2Deg(actualHvAngleRad);

  if (0 <= hvAngleDeg && hvAngleDeg <= 7) return 0;
  if (353 <= hvAngleDeg && hvAngleDeg <= 360) return 0;

  return actualHvAngleRad;
};

export const hvAngleFromMouse = (
  ev: MouseEvent,
  innerTopMidpoint: Vec,
  circleCenter: Vec,
  mouseAreaPos: Vec
): number => {
  // relative clicked pos
  const mousePos: Vec = {
    x: ev.clientX - mouseAreaPos.x,
    y: ev.clientY - mouseAreaPos.y,
  };
  const actualHvAngleVal = hvAngle(innerTopMidpoint, circleCenter, mousePos);
  const hvAngleVal = adjustHvAngle(actualHvAngleVal);

  return hvAngleVal;
};
