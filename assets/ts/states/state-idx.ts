import { useNumberState } from "~/assets/ts/states/base";
import {
  CIRCLE_STATE_LIST,
  LONG_BTN_STATE_LIST,
  MIDDLE_STATE_LIST,
} from "@/assets/ts/main/state";

const useStateIdx = (initVal: number, length: number) => {
  const [idx, _setIdx] = useNumberState(initVal);
  const nextIdx = () => _setIdx((idx.value + 1) % length);

  return [idx, nextIdx] as const;
};

// index と indexに対応する状態名 のどちらも提供
const useCircleStateIdx = (initVal: number) => {
  const [idx, nextIdx] = useStateIdx(initVal, CIRCLE_STATE_LIST.length);
  const currentState = computed(() => CIRCLE_STATE_LIST[idx.value]);

  return [idx, nextIdx, currentState] as const;
};

const useMiddleStateIdx = (initVal: number) => {
  const [idx, nextIdx] = useStateIdx(initVal, MIDDLE_STATE_LIST.length);
  const currentState = computed(() => MIDDLE_STATE_LIST[idx.value]);

  return [idx, nextIdx, currentState] as const;
};

const useCurrentLongTypeIdx = (initVal: number) =>
  useStateIdx(initVal, LONG_BTN_STATE_LIST.length);

export { useCircleStateIdx, useCurrentLongTypeIdx, useMiddleStateIdx };
