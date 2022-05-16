export const toPx = (value: number): string => String(value) + "px";

// size
export const heightPx = (value: number) => ({ height: toPx(value) });
export const widthPx = (value: number) => ({ width: toPx(value) });

// position
export const topPx = (value: number) => ({ top: toPx(value) });
export const bottomPx = (value: number) => ({ bottom: toPx(value) });
export const leftPx = (value: number) => ({ left: toPx(value) });

// margin
export const marginRightPx = (value: number) => ({ marginRight: toPx(value) });
export const marginBottomPx = (value: number) => ({
  marginBottom: toPx(value),
});
