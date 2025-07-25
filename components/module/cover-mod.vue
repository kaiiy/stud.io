<script setup lang="ts">
import RoundedLineSvg from "@/components/shapes/rounded-line-svg.vue";
import { COLOR } from "@/assets/ts/style/color";
import { getModuleGap, coverModSize } from "@/assets/ts/parts/get-size";
import {
  marginBottomPx,
  widthPx,
  heightPx,
  bottomPx,
  leftPx,
} from "@/assets/ts/style/to-px";
import { rotateDegOnly, transformOrigin } from "@/assets/ts/style/transform";
import { AREA_ID } from "@/assets/ts/parts/cover";
import { getMousePos, getMouseRelativePos } from "@/assets/ts/parts/mouse";
import { type Vec } from "@/assets/ts/math/vec";
import { toCoverDeg } from "@/assets/ts/parts/cover";
import { STATE, type MiddleState } from "@/assets/ts/main/state";

const props = defineProps<{
  baseSize: number;
  deg: number;
  state: MiddleState; // TODO: stateによって表示するフタを切り替える
  updateDeg: (deg: number) => void;
}>();

const { height: modHeight, width: modWidth } = coverModSize(props.baseSize);

const mouseAreaPos = ref<Vec>({ x: 0, y: 0 });

const onClickingMouseArea = (ev: MouseEvent) => {
  const mouseRelativePos = getMouseRelativePos(ev, mouseAreaPos.value);

  // set mouseDeg to coverDeg
  const _deg = toCoverDeg(mouseRelativePos, { x: modWidth, y: modWidth });
  if (_deg < -90 || _deg > 0) throw new Error("invalid deg");
  props.updateDeg(_deg);
};

onMounted(() => {
  mouseAreaPos.value = getMousePos(AREA_ID);
  // console.table(mouseAreaPos)
});
</script>

<template>
  <div
    class="relative"
    :style="{
      ...marginBottomPx(getModuleGap(baseSize)),
      ...widthPx(modWidth),
      ...heightPx(modHeight),
    }"
  >
    <div
      :id="AREA_ID"
      @click="onClickingMouseArea"
      class="absolute cursor-pointer"
      :style="{
        ...widthPx(modWidth),
        ...heightPx(modWidth),
        ...leftPx(0),
        ...bottomPx(0),
      }"
    >
      <RoundedLineSvg
        v-show="props.state === STATE.MIDDLE.POT"
        class="absolute"
        :style="{
          ...transformOrigin(modHeight / 2, modHeight / 2),
          ...rotateDegOnly(props.deg),
          ...leftPx(0),
          ...bottomPx(0),
        }"
        :width-px="modWidth"
        :height-px="modHeight"
        :color="COLOR.LIGHT_PURPLE"
      />
      <!-- TODO: カップの開く動作 -->
      <RoundedLineSvg
        v-show="props.state === STATE.MIDDLE.CUP"
        class="absolute"
        :style="{
          ...transformOrigin(modHeight / 2, modHeight / 2),
          ...rotateDegOnly(props.deg),
          ...leftPx(0),
          ...bottomPx(0),
        }"
        :width-px="modWidth"
        :height-px="modHeight"
        :color="COLOR.LIGHT_PURPLE"
      />
    </div>
  </div>
</template>
