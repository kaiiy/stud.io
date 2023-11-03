export const STATE = {
	CIRCLE: {
		TIME: "circle-time",
		VALVE: "circle-valve",
		POT: "circle-pot",
	},
	MIDDLE: {
		POT: "middle-pot",
		CUP: "middle-cup",
	},
	LONG_BTN: {
		CIRCLE: "long-btn-circle",
		MIDDLE: "long-btn-middle",
	},
	SWITCH: {
		ON: "switch-on",
		OFF: "switch-off",
	},
};

export const CIRCLE_STATE_LIST = [
	STATE.CIRCLE.VALVE,
	STATE.CIRCLE.TIME,
	STATE.CIRCLE.POT,
];
export const MIDDLE_STATE_LIST = [STATE.MIDDLE.POT, STATE.MIDDLE.CUP];
export const LONG_BTN_STATE_LIST = [
	STATE.LONG_BTN.CIRCLE,
	STATE.LONG_BTN.MIDDLE,
];

export const getCurrentLongState = (
	currentLongTypeIdx: number,
	circleStateIdx: number,
	middleStateIdx: number,
) => {
	if (LONG_BTN_STATE_LIST[currentLongTypeIdx] === STATE.LONG_BTN.CIRCLE)
		return CIRCLE_STATE_LIST[circleStateIdx];
	return MIDDLE_STATE_LIST[middleStateIdx];
};
