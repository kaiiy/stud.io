<script setup lang="ts">
import { getNoodleSize } from "assets/ts/parts/get-size";
import { heightPx, widthPx } from "assets/ts/style/to-px";
import { baseLeftPx, baseTopPx } from "@/assets/ts/parts/middle/noodle";
import { COLOR } from "@/assets/ts/style/color";
import Noodle from "./noodle.vue";

const props = defineProps<{
  baseSize: number;
}>();

const leftBase = 0.2;
const topPx = (value: number) => baseTopPx(value, props.baseSize);
const leftPx = (value: number) => baseLeftPx(value + leftBase, props.baseSize);

const { height: noodleHeight, width: NoodleWidth } = getNoodleSize(
  props.baseSize,
);

const noodleColor: string = COLOR.LIGHT_PURPLE;
</script>

<template>
  <div
    :style="{
      ...topPx(1.4),
    }"
  >
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(0),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(0.2),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(0.4),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(0.6),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(0.8),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(1),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(1.2),
      }"
      :color="noodleColor"
    />
    <Noodle
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(NoodleWidth),
        ...leftPx(0),
        ...topPx(1.4),
      }"
      :color="noodleColor"
    />
    <!-- <Noodle :style="{
      ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...leftPx(0), ...topPx(1.6)
    }" :color="noodleColor" />
    <Noodle :style="{
      ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...leftPx(0), ...topPx(1.8)
    }" :color="noodleColor" /> -->
  </div>
</template>
