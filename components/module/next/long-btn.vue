<script setup lang="ts">
import { getNextModSize, circleLightSize } from "@/assets/ts/parts/get-size"
import { heightPx, topPx, leftPx, rightPx } from "assets/ts/style/to-px"
import CircleSvg from "@/components/shapes/circle-svg.vue"
import { COLOR } from "@/assets/ts/style/color"

type Props = {
  typeIdx: number,
  baseSize: number,
  handleClick: () => void,
};
const props = defineProps<Props>();

const {
  height: modHeight,
} = getNextModSize(props.baseSize)

const {
  margin: lightMargin, radius: lightRadius
} = circleLightSize(props.baseSize)

const colorList = computed(() => {
  const defaultList = [COLOR.WHITE, COLOR.WHITE]
  if (props.typeIdx === 0) defaultList[0] = COLOR.DARK_PINK
  else if (props.typeIdx === 1) defaultList[1] = COLOR.DARK_PURPLE
  return defaultList
})
</script> 

<template>
  <div class="relative col-span-1 row-span-1">
    <img @click="handleClick()" class="comp-default-click" :style="{
      ...heightPx(modHeight)
    }" src="@/assets/img/parts/long-btn.png" alt="" />

    <CircleSvg class="absolute" :color="colorList[0]" :radius="lightRadius" :style="{
      ...topPx(lightMargin), ...leftPx(lightMargin)
    }" />
    <CircleSvg class="absolute" :color="colorList[1]" :radius="lightRadius" :style="{
      ...topPx(lightMargin), ...rightPx(lightMargin)
    }" />
  </div>
</template>
