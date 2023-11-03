import { convertRad2Deg } from "@/assets/ts/math/angle";
import { Vec, diffVec, getAngle } from "@/assets/ts/math/vec";

/**
 *
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
	mouseRelativePos: Vec,
	circleCenter: Vec,
): number => {
	const actualHvAngleVal = hvAngle(circleCenter, mouseRelativePos);
	const hvAngleVal = adjustHvAngle(actualHvAngleVal);

	return hvAngleVal;
};
