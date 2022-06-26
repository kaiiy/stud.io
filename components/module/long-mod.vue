<script setup lang="ts">
import { getLongModSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx, rightPx, fontSizePx, bottomPx } from "assets/ts/style/to-px"
import { getLiquidSize } from "assets/ts/parts/liquid"
import { COLOR } from "@/assets/ts/style/color"

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
    <div class="comp-default bg-dark-red" :style="{
      ...heightPx(modInnerHeight), ...widthPx(liquidWidth),
      ...topPx(modInnerTop), ...leftPx(modInnerLeft)
    }"></div>

    <!-- container  -->
    <img class="comp-default" :style="{
      ...heightPx(modHeight)
    }" src="@/assets/img/parts/long.png" alt="" />

    <!-- num -->
    <div class="absolute leading-none num-font prohibit-mouse" :style="{
      ...leftPx(numHorizontalMargin), ...bottomPx(numVerticalMargin), ...fontSizePx(numSize),
      color: COLOR.DARK_RED,
    }">{{ minMum }}</div>
    <div class="absolute leading-none num-font prohibit-mouse" :style="{
      ...rightPx(numHorizontalMargin), ...topPx(numVerticalMargin), ...fontSizePx(numSize),
      color: COLOR.DARK_RED
    }">{{ maxNum }}</div>

  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
<style scoped>
/* for long num  */
.num-font {
  font-family: 'Goldman', cursive;
}
</style>
