// corresponding to 2 * PI
const MAX_TIME_SEC = 600;

export const getRemainingTime = (timerRate: number) => {
  if (timerRate < 0 || timerRate > 1) throw new Error();
  return MAX_TIME_SEC * timerRate;
};
