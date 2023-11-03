import { Vec } from "@/assets/ts/math/vec";
import { isUndefined } from "@/assets/ts/utils/is-undefined";

export const getMousePos = (mouseId: string): Vec => {
	const mouseAreaBound = document
		.getElementById(mouseId)
		?.getBoundingClientRect();
	if (isUndefined(mouseAreaBound)) throw new Error("can't get mouse area");

	const mousePos = {
		x: mouseAreaBound?.left ?? 0,
		y: mouseAreaBound?.top ?? 0,
	};
	return mousePos;
};

export const getMouseRelativePos = (
	ev: MouseEvent,
	mouseAreaPos: Vec,
): Vec => ({
	x: ev.clientX - mouseAreaPos.x,
	y: ev.clientY - mouseAreaPos.y,
});
