<script setup lang="ts">
import { getMiddleModSize } from "assets/ts/parts/get-size";
import {
  heightPx,
  widthPx,
  leftPx,
  topPx,
  strokeWidthPx,
} from "assets/ts/style/to-px";
import { getLiquidSize, getLiquidTop } from "assets/ts/parts/liquid";
import { COLOR, bgColor } from "@/assets/ts/style/color";
import { STATE, type MiddleState } from "@/assets/ts/main/state";
import Noodles from "./middle/noodles.vue";
import Container from "./middle/container.vue";
import LiquidLine from "./middle/liquid-line.vue";

const props = defineProps<{
  baseSize: number;
  liquidRate: number;
  state: MiddleState;
}>();

const {
  height: modHeight,
  width: modWidth,
  innerHeight: modInnerHeight,
  innerWidth: modInnerWidth,
  innerTop: modInnerTop,
  innerLeft: modInnerLeft,
} = getMiddleModSize(props.baseSize);

// liquid
const liquidHeight = computed<number>(() => {
  return getLiquidSize(modInnerHeight, props.liquidRate);
});
const liquidTop = computed<number>(() => {
  return getLiquidTop(modInnerTop, liquidHeight.value, modInnerHeight);
});

// cup
const showCupComponents = computed(() => props.state === STATE.MIDDLE.CUP);
</script>

<template>
  <div
    class="relative overflow-hidden"
    :style="{
      ...heightPx(modHeight),
      ...widthPx(modWidth),
    }"
  >
    <!-- liquid  -->
    <div
      class="absolute"
      :style="{
        ...heightPx(liquidHeight),
        ...widthPx(modInnerWidth),
        ...topPx(liquidTop),
        ...leftPx(modInnerLeft),
        ...bgColor(COLOR.DARK_PURPLE),
      }"
    ></div>

    <!-- liquid line (cup)  -->
    <!-- <LiquidLine
      class="absolute"
      v-show="showCupComponents"
      :style="{
        ...strokeWidthPx(0.08 * baseSize),
        ...topPx(1 * baseSize),
      }"
      :color="COLOR.LIGHT_PURPLE"
    /> -->

    <!-- noodles (cup) -->
    <Noodles
      class="absolute"
      v-show="showCupComponents"
      :base-size="baseSize"
    />

    <!-- container  -->
    <Container
      class="absolute"
      :style="{
        ...heightPx(modHeight),
        ...widthPx(modWidth),
      }"
      :color="COLOR.LIGHT_PURPLE"
    />
  </div>
</template>
