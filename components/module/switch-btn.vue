<script setup lang="ts">
import { switchSize } from "@/assets/ts/parts/get-size"
import { heightPx, topPx, leftPx, widthPx } from "assets/ts/style/to-px"
import CircleSvg from "@/components/shapes/circle-svg.vue"
import { COLOR } from "@/assets/ts/style/color"
import { STATE } from "@/assets/ts/main/state"
import SwitchBase from "./switch/base.vue"

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
    <SwitchBase class="absolute" :style="{
      ...heightPx(modHeight), ...widthPx(modHeight)
    }" :color="COLOR.LIGHT_PURPLE" />

    <CircleSvg @click="handleClick()" class="absolute cursor-pointer" :color="circleColor" :radius="circleRadius"
      :style="{
        ...topPx(circleMargin), ...leftPx(circleMargin)
      }" />
  </div>
</template>
