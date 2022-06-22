<script setup lang="ts">
import { getLongModSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidSize } from "assets/ts/parts/liquid"

const props = defineProps<{
  baseSize: number,
  liquidRate: number
}>();

// get size
const {
  height: modHeight, width: modWidth, innerHeight: modInnerHeight, innerWidth: modInnerWidth,
  innerTop: modInnerTop, innerLeft: modInnerLeft
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

  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
