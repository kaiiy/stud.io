<script setup lang="ts">
import { getLongModSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx, rightPx, fontSizePx, bottomPx } from "assets/ts/style/to-px"
import { getLiquidSize } from "assets/ts/parts/liquid"
import { COLOR, bgColor } from "@/assets/ts/style/color"

const props = defineProps<{
  baseSize: number,
  liquidRate: number,
  maxNum: number,
  minMum: number
}>();

// get size
const {
  height: modHeight, width: modWidth, innerHeight: modInnerHeight, innerWidth: modInnerWidth,
  innerTop: modInnerTop, innerLeft: modInnerLeft, numHorizontalMargin, numVerticalMargin, numSize
} = getLongModSize(props.baseSize)

// liquid 
const liquidWidth = computed<number>(() => getLiquidSize(modInnerWidth, props.liquidRate))
</script>

<template>
  <div class="relative  col-span-4 row-span-1" :style="{
    ...heightPx(modHeight), ...widthPx(modWidth)
  }">
    <!-- liquid  -->
    <div class="absolute" :style="{
      ...heightPx(modInnerHeight), ...widthPx(liquidWidth),
      ...topPx(modInnerTop), ...leftPx(modInnerLeft), ...bgColor(COLOR.DARK_RED)
    }"></div>

    <!-- container  -->
    <svg class="absolute" :style="{
      ...heightPx(modHeight), ...widthPx(modWidth)
    }" version="1.1" viewBox="0 0 113.77 26.458" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-1.5e-6 -116.42)">
        <path
          d="m2.1069 116.42c-1.1672 0-2.1069 1.18-2.1069 2.6458v21.167c0 1.4658 0.93966 2.6458 2.1069 2.6458h109.56c1.1672 0 2.1069-1.18 2.1069-2.6458v-21.167c0-1.4658-0.93966-2.6458-2.1069-2.6458zm8.4275 9.2604h92.702c1.7508 0 3.1603 1.7701 3.1603 3.9688s-1.4095 3.9688-3.1603 3.9688h-92.702c-1.7508 0-3.1603-1.7701-3.1603-3.9688s1.4095-3.9688 3.1603-3.9688z"
          :fill="COLOR.LIGHT_RED" />
      </g>
    </svg>

    <!-- num -->
    <div class="absolute leading-none num-font pointer-events-none" :style="{
      ...leftPx(numHorizontalMargin), ...bottomPx(numVerticalMargin), ...fontSizePx(numSize),
      color: COLOR.DARK_RED,
    }">{{ minMum }}</div>
    <div class="absolute leading-none num-font pointer-events-none" :style="{
      ...rightPx(numHorizontalMargin), ...topPx(numVerticalMargin), ...fontSizePx(numSize),
      color: COLOR.DARK_RED
    }">{{ maxNum }}</div>

  </div>
</template>

<style scoped>
/* for long num  */
.num-font {
  font-family: 'Goldman', cursive;
}
</style>
