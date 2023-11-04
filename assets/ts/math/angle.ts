export const convertDeg2Rad = (deg: number) => (deg * Math.PI) / 180;
export const convertRad2Deg = (rad: number) => (rad / Math.PI) * 180;

/**
 *
 * @param angle 0 <= val < 2*pi
 * @returns 0 <= val < 1
 */
export const convertAngle2Rate = (angle: number): number => {
	console.assert(0 <= angle && angle < 2 * Math.PI);
	return angle / (2 * Math.PI);
};
