<script setup lang="ts">
import { switchSize } from "@/assets/ts/parts/get-size"
import { heightPx, topPx, leftPx, widthPx } from "assets/ts/style/to-px"
import CircleSvg from "@/components/shapes/circle-svg.vue"
import { COLOR } from "@/assets/ts/style/color"
import { STATE } from "@/assets/ts/main/state"
const props = defineProps<{
  state: string,
  baseSize: number,
  handleClick: () => void,
}>();

const {
  height: modHeight, circleRadius, circleMargin
} = switchSize(props.baseSize)

const circleColor = computed(() => {
  if (props.state === STATE.SWITCH.OFF) return COLOR.WHITE
  return COLOR.DARK_PURPLE
})
</script> 

<template>
  <div class="relative col-span-1 row-span-1">
    <svg class="comp-default" :style="{
      ...heightPx(modHeight), ...widthPx(modHeight)
    }" viewBox="0 0 26.45834 26.45834" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <g id="layer1" transform="translate(-116.41667,-116.41667)">
        <path id="rect1215-5-6" style="fill:#e1daee;stroke-width:1.05833;stroke-linecap:round;stroke-linejoin:round"
          d="m 119.0625,116.41667 h 21.16668 c 1.46579,0 2.64583,1.18004 2.64583,2.64583 v 21.16668 c 0,1.46579 -1.18004,2.64583 -2.64583,2.64583 H 119.0625 c -1.46579,0 -2.64583,-1.18004 -2.64583,-2.64583 V 119.0625 c 0,-1.46579 1.18004,-2.64583 2.64583,-2.64583 z" />
      </g>
    </svg>

    <CircleSvg @click="handleClick()" class="comp-default-click" :color="circleColor" :radius="circleRadius" :style="{
      ...topPx(circleMargin), ...leftPx(circleMargin)
    }" />
  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
