<script setup lang="ts">
import { getNoodleSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx } from "assets/ts/style/to-px"
import { baseLeftPx, baseTopPx } from "@/assets/ts/parts/middle/noodle"
import { rotateOnly } from "~~/assets/ts/style/transform"
import { COLOR } from "@/assets/ts/style/color"
import Noodle from "./noodle.vue"

const props = defineProps<{
  baseSize: number,
}>();

const {
  height: noodleHeight, width: NoodleWidth
} = getNoodleSize(props.baseSize)

const noodleColor: string = COLOR.DARK_PURPLE
</script>

<template>
  <Noodle class="absolute" :style="{
    ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...rotateOnly(50), ...baseLeftPx(0.1, baseSize), ...baseTopPx(1, baseSize)
  }" :color="noodleColor" />
  <Noodle class="absolute" :style="{
    ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...rotateOnly(4), ...baseLeftPx(0.5, baseSize), ...baseTopPx(0.4, baseSize)
  }" :color="noodleColor" />
  <Noodle class="absolute" :style="{
    ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...rotateOnly(0), ...baseLeftPx(0.2, baseSize), ...baseTopPx(0.8, baseSize)
  }" :color="noodleColor" />
  <Noodle class="absolute" :style="{
    ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...rotateOnly(80), ...baseLeftPx(0.1, baseSize), ...baseTopPx(1, baseSize)
  }" :color="noodleColor" />
  <Noodle class="absolute" :style="{
    ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...rotateOnly(20), ...baseLeftPx(0.5, baseSize), ...baseTopPx(0.4, baseSize)
  }" :color="noodleColor" />
  <Noodle class="absolute" :style="{
    ...heightPx(noodleHeight), ...widthPx(NoodleWidth), ...rotateOnly(10), ...baseLeftPx(0.2, baseSize), ...baseTopPx(0.8, baseSize)
  }" :color="noodleColor" />
</template>
