<script setup lang="ts">
import { switchSize } from "@/assets/ts/parts/get-size"
import { heightPx, topPx, leftPx } from "assets/ts/style/to-px"
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
    <img class="comp-default" :style="{
      ...heightPx(modHeight)
    }" src="@/assets/img/parts/switch.png" alt="" />

    <CircleSvg @click="handleClick()" class="comp-default-click" :color="circleColor" :radius="circleRadius" :style="{
      ...topPx(circleMargin), ...leftPx(circleMargin)
    }" />
  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
