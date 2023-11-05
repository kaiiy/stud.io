import { ref } from "vue";

const useNumberState = (
  initValue: number,
): [globalThis.Ref<number>, (newState: number) => void] => {
  const state = ref(initValue);
  const updateState = (newState: number) => {
    state.value = newState;
  };

  return [state, updateState];
};

const useStringState = (
  initValue: string,
): [globalThis.Ref<string>, (newState: string) => void] => {
  const state = ref(initValue);
  const updateState = (newState: string) => {
    state.value = newState;
  };

  return [state, updateState];
};

export { useNumberState, useStringState };
