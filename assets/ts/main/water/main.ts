// valve
// max valve (ml/msec)
const MAX_WATER_SUPPLY = 224 / 1000;

const getWaterMlFromValve = (timeMsec: number) => MAX_WATER_SUPPLY * timeMsec;

// pot
const POT_CAPACITY = 1526;

const getWaterMlFromPot = (amountWaterMlPerMsec: number, timeMsec: number) =>
  amountWaterMlPerMsec * timeMsec;
