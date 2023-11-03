export const transformOrigin = (x: number, y: number) => ({
	"transform-origin": `${x}px ${y}px`,
});

export const rotateOnly = (rad: number) => ({
	transform: `rotate(${rad}rad)`,
});
export const rotateDegOnly = (deg: number) => ({
	transform: `rotate(${deg}deg)`,
});
