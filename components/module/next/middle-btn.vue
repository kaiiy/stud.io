<script setup lang="ts">
import { getNextModSize, circleLightSize } from "@/assets/ts/parts/get-size"
import { heightPx, topPx, leftPx, rightPx, bottomPx } from "assets/ts/style/to-px"
import Circle from "@/components/shapes/circle.vue"

type Props = {
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
</script> 

<template>
  <div class="relative col-span-1 row-span-1">
    <img @click="handleClick()" class="absolute cursor-pointer" :style="{
      ...heightPx(modHeight)
    }" src="@/assets/img/parts/middle-btn.png" />

    <Circle class="absolute" color="white" :radius="lightRadius" :style="{
      ...topPx(lightMargin), ...leftPx(lightMargin)
    }" />
    <Circle class="absolute" color="white" :radius="lightRadius" :style="{
      ...topPx(lightMargin), ...rightPx(lightMargin)
    }" />
  </div>
</template>
