const adjustPotRate = (potRate: number) => {
  const BOTTOM_CORRECTION_RATIO = 0.03;
  const TOP_CORRECTION_RATIO = 0.03;

  if (potRate < BOTTOM_CORRECTION_RATIO) return 0;
  if (potRate > 1 - TOP_CORRECTION_RATIO) return 1;
  return potRate;
};

export const getPotRad = (potRate: number) => {
  const absPotRate = Math.abs(potRate);
  const adjustedRate = adjustPotRate(absPotRate);

  if (adjustedRate < 0 || adjustedRate > 1) throw RangeError();
  return Math.asin(adjustedRate);
};
