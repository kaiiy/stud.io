// Circle Mod
import { useNumberState } from "~/assets/ts/states/base";
import { useCircleStateIdx } from "~/assets/ts/states/state-idx";

// ---- State handling ----
const [circleStateIdx, setNextCircleIdx, currentCircleState] =
  useCircleStateIdx(0);

export { circleStateIdx, currentCircleState, setNextCircleIdx };

// ---- Each state ----
// 1. Valve state

// 2. Time state
const [circleInitTimeSec, updateCircleInitTimeSec] = useNumberState(0);
const [circleRemainingTimeRate, updateCircleRemainingTimeRate] = useNumberState(
  0,
);
// 3. Pot state
const [circlePotRad, updateCirclePotRad] = useNumberState(0);

export {
  circleInitTimeSec,
  circlePotRad,
  circleRemainingTimeRate,
  updateCircleInitTimeSec,
  updateCirclePotRad,
  updateCircleRemainingTimeRate,
};
