export const toPx = (value: number): string => String(value) + "px";

// size
export const heightPx = (value: number) => ({ height: toPx(value) });
export const widthPx = (value: number) => ({ width: toPx(value) });

// position
export const topPx = (value: number) => ({ top: toPx(value) });
export const bottomPx = (value: number) => ({ bottom: toPx(value) });
export const leftPx = (value: number) => ({ left: toPx(value) });
export const rightPx = (value: number) => ({ right: toPx(value) });

// margin
export const marginRightPx = (value: number) => ({ marginRight: toPx(value) });
export const marginBottomPx = (value: number) => ({
  marginBottom: toPx(value),
});
export const marginTopPx = (value: number) => ({ marginTop: toPx(value) });
export const marginLeftPx = (value: number) => ({
  marginLeft: toPx(value),
});

// gap
export const gapPx = (value: number) => ({ gap: toPx(value) });

// font
export const fontSizePx = (value: number) => ({ fontSize: toPx(value) });

export const strokeWidthPx = (value: number) => ({ strokeWidth: toPx(value) });
