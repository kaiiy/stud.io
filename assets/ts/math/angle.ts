export const convertDeg2Rad = (deg: number) => (deg * Math.PI) / 180;
export const convertRad2Deg = (rad: number) => (rad / Math.PI) * 180;

/**
 *
 * @param angle 0 <= val < 2*pi
 * @returns 0 <= val < 1
 */
export const convertAngle2Rate = (angle: number): number => {
	if (!(0 <= angle && angle < 2 * Math.PI)) throw new RangeError();
	return angle / (2 * Math.PI);
};
