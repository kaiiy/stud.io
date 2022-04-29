<script setup lang="ts">
import { getCircleModSize, getCircleValveSize } from "assets/ts/materials/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidHeight, getLiquidTop } from "assets/ts/materials/middle/liquid"

type Props = {
  baseSize: number,
};
const props = defineProps<Props>();

// get size
const {
  size: modSize, innerSize: modInnerSize
} = getCircleModSize(props.baseSize)
const {
  height: valveHeight, left: valveLeft, top: valveTop
} = getCircleValveSize(props.baseSize)

</script>

<template>
  <div class="relative">
    <!-- container  -->
    <img class="absolute object-contain pointer-events-none z-10" :style="{
      ...heightPx(modSize)
    }" src="@/assets/img/materials/circle.png" alt="" />
    <img class="absolute object-contain pointer-events-none z-20" :style="{
      ...heightPx(valveHeight), ...leftPx(valveLeft), ...topPx(valveTop)
    }" src="@/assets/img/materials/valve.png" alt="">
  </div>
</template>
