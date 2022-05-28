// valve
// max valve (ml/msec)
const MAX_WATER_SUPPLY = 224 / 1000;

export const getWaterMlFromValve = (timeMsec: number, hvRate: number) =>
  MAX_WATER_SUPPLY * hvRate * timeMsec;

// pot
const POT_CAPACITY = 1526;

const getWaterMlFromPot = (amountWaterMlPerMsec: number, timeMsec: number) =>
  amountWaterMlPerMsec * timeMsec;
export const potFillRate = (waterVol: number): number =>
  waterVol / POT_CAPACITY;

// cup
// todo
const CUP_CAPACITY = 700;
export const cupFillRate = (waterVol: number): number =>
  waterVol / CUP_CAPACITY;
