import { useStringState } from "./base";
import { STATE } from "@/assets/ts/main/state";

const useSwitchState = (initState: string) => {
  const [state, updateState] = useStringState(initState);
  const toggle = () => {
    if (state.value === STATE.SWITCH.OFF) updateState(STATE.SWITCH.ON);
    else if (state.value === STATE.SWITCH.ON) updateState(STATE.SWITCH.OFF);
    else throw new Error("Invalid state");
  };
  const ret: [globalThis.Ref<string>, () => void] = [state, toggle];
  return ret;
};

export { useSwitchState };
