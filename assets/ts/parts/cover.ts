import { convertRad2Deg } from "@/assets/ts/math/angle";
import { type Vec } from "@/assets/ts/math/vec";

export const AREA_ID = "COVER_AREA";

/***
 * @returns -90 <= deg <= 0
 */
export const cvtToCoverDeg = (pos: Vec, size: Vec) => {
	const rad = pos.x === 0 ? Math.PI : -Math.atan((size.y - pos.y) / pos.x);
	const deg = convertRad2Deg(rad);

	// adjust
	if (-3 <= deg) return 0;
	if (deg <= -87) return -90;

	return deg;
};
