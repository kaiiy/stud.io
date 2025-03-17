import { useStringState } from "~/assets/ts/states/base";
import { STATE } from "@/assets/ts/main/state";

// Switch Mod
const [switchState, updateSwitchState] = useStringState(STATE.SWITCH.OFF);

export { switchState, updateSwitchState };
