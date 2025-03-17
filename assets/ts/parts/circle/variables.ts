import { useNumberState } from "@/assets/states/base";

// Circle Mod
const [circleInitTimeSec, updateCircleInitTimeSec] = useNumberState(0);
const [circleRemainingTimeRate, updateCircleRemainingTimeRate] =
  useNumberState(0);
const [circlePotRad, updateCirclePotRad] = useNumberState(0);

export {
  circleInitTimeSec,
  circlePotRad,
  circleRemainingTimeRate,
  updateCircleInitTimeSec,
  updateCirclePotRad,
  updateCircleRemainingTimeRate,
};
