import { toPx } from "../../style/to-px";

// css margin
export const baseLeftPx = (value: number, baseSize: number) => ({
	left: toPx(baseSize * value),
});
export const baseTopPx = (value: number, baseSize: number) => ({
	top: toPx(baseSize * value),
});
