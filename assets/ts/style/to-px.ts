export const toPx = (value: number): string => String(value) + "px";

// size
export const heightPx = (value: number) => ({
  height: toPx(value),
});
export const widthPx = (value: number) => ({
  width: toPx(value),
});

// margin
export const topPx = (value: number) => ({
  top: toPx(value),
});
export const bottomPx = (value: number) => ({
  bottom: toPx(value),
});
export const leftPx = (value: number) => ({
  left: toPx(value),
});
