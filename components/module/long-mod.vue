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
    <!-- container  -->
    <img class="comp-default z-20" :style="{
      ...heightPx(modHeight)
    }" src="@/assets/img/parts/long.png" alt="" />

    <!-- liquid  -->
    <div class="comp-default bg-dark-red z-10" :style="{
      ...heightPx(modInnerHeight), ...widthPx(liquidWidth),
      ...topPx(modInnerTop), ...leftPx(modInnerLeft)
    }">
    </div>

    <!-- num (todo)  -->
    <div class="absolute z-20 leading-none num-font" :style="{
      ...leftPx(numHorizontalMargin), ...bottomPx(numVerticalMargin), ...fontSizePx(numSize),
      color: COLOR.DARK_RED,
    }">{{ minMum }}</div>
    <div class="absolute z-20 leading-none num-font" :style="{
      ...rightPx(numHorizontalMargin), ...topPx(numVerticalMargin), ...fontSizePx(numSize),
      color: COLOR.DARK_RED
    }">{{ maxNum }}</div>

  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
