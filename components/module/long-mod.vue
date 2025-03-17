<script setup lang="ts">
import { getLongModSize } from "assets/ts/parts/get-size";
import {
  heightPx,
  widthPx,
  leftPx,
  topPx,
  rightPx,
  fontSizePx,
  bottomPx,
} from "assets/ts/style/to-px";
import { getLiquidSize } from "assets/ts/parts/liquid";
import { COLOR, bgColor } from "@/assets/ts/style/color";
import Container from "./long/container.vue";

const props = defineProps<{
  baseSize: number;
  liquidRate: number;
  maxNum: number;
  minMum: number;
}>();

// get size
const {
  height: modHeight,
  width: modWidth,
  innerHeight: modInnerHeight,
  innerWidth: modInnerWidth,
  innerTop: modInnerTop,
  innerLeft: modInnerLeft,
  numHorizontalMargin,
  numVerticalMargin,
  numSize,
} = getLongModSize(props.baseSize);

// liquid
const liquidWidth = computed<number>(() =>
  getLiquidSize(modInnerWidth, props.liquidRate),
);
</script>

<template>
  <div
    class="relative col-span-4 row-span-1"
    :style="{
      ...heightPx(modHeight),
      ...widthPx(modWidth),
    }"
  >
    <!-- liquid  -->
    <div
      class="absolute"
      :style="{
        ...heightPx(modInnerHeight),
        ...widthPx(liquidWidth),
        ...topPx(modInnerTop),
        ...leftPx(modInnerLeft),
        ...bgColor(COLOR.DARK_RED),
      }"
    ></div>

    <!-- container  -->
    <Container
      class="absolute"
      :style="{
        ...heightPx(modHeight),
        ...widthPx(modWidth),
      }"
      :color="COLOR.LIGHT_RED"
    />

    <!-- num -->
    <div
      class="absolute leading-none num-font pointer-events-none select-none"
      :style="{
        ...leftPx(numHorizontalMargin),
        ...bottomPx(numVerticalMargin),
        ...fontSizePx(numSize),
        color: COLOR.DARK_RED,
      }"
    >
      {{ minMum }}
    </div>
    <div
      class="absolute leading-none num-font pointer-events-none select-none"
      :style="{
        ...rightPx(numHorizontalMargin),
        ...topPx(numVerticalMargin),
        ...fontSizePx(numSize),
        color: COLOR.DARK_RED,
      }"
    >
      {{ maxNum }}
    </div>
  </div>
</template>

<style scoped>
/* for num  */
.num-font {
  font-family: "Goldman", cursive;
}
</style>
