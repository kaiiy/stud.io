<script setup lang="ts">
import { getNoodleSize } from "assets/ts/parts/get-size";
import { heightPx, widthPx } from "assets/ts/style/to-px";
import { baseLeftPx, baseTopPx } from "@/assets/ts/parts/middle/noodle";
import { COLOR } from "@/assets/ts/style/color";
import Noodle from "./noodle.vue";

const props = defineProps<{ baseSize: number }>();

const leftBase = 0.2;
const topPx = (value: number) => baseTopPx(value, props.baseSize);
const leftPx = (value: number) => baseLeftPx(value + leftBase, props.baseSize);

const { height: noodleHeight, width: noodleWidth } = getNoodleSize(
  props.baseSize
);
const noodleColor: string = COLOR.LIGHT_PURPLE;

const offsets: number[] = Array.from({ length: 10 }, (_, i) => i * 0.2);
</script>

<template>
  <div :style="topPx(1.4)">
    <Noodle
      v-for="offset in offsets"
      :key="offset"
      :style="{
        ...heightPx(noodleHeight),
        ...widthPx(noodleWidth),
        ...leftPx(0),
        ...topPx(offset),
      }"
      :color="noodleColor"
    />
  </div>
</template>
