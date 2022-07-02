<script setup lang="ts">
import { getNextModSize, circleLightSize } from "@/assets/ts/parts/get-size"
import { heightPx, topPx, leftPx, rightPx, bottomPx, widthPx } from "assets/ts/style/to-px"
import CircleSvg from "@/components/shapes/circle-svg.vue"
import { COLOR } from "@/assets/ts/style/color"
import BtnBase from "./btn-base.vue"

const props = defineProps<{
  stateIdx: number,
  baseSize: number,
  handleClick: () => void,
}>();

const {
  height: modHeight,
} = getNextModSize(props.baseSize)

const {
  margin: lightMargin, radius: lightRadius
} = circleLightSize(props.baseSize)

const colorList = computed(() => {
  const defaultList = [COLOR.WHITE, COLOR.WHITE, COLOR.WHITE]
  defaultList[props.stateIdx] = COLOR.DARK_PINK
  return defaultList
})
</script> 

<template>
  <div class="relative col-span-1 row-span-1">
    <BtnBase @click="handleClick()" class="comp-default-click" :style="{
      ...heightPx(modHeight), ...widthPx(modHeight)
    }" :base-color="COLOR.DARK_PINK" :inner-color="COLOR.LIGHT_PINK" />

    <CircleSvg class="comp-default" :color="colorList[0]" :radius="lightRadius" :style="{
      ...topPx(lightMargin), ...leftPx(lightMargin)
    }" />
    <CircleSvg class="comp-default" :color="colorList[1]" :radius="lightRadius" :style="{
      ...topPx(lightMargin), ...rightPx(lightMargin)
    }" />
    <CircleSvg class="comp-default" :color="colorList[2]" :radius="lightRadius" :style="{
      ...bottomPx(lightMargin), ...leftPx(lightMargin)
    }" />
  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
