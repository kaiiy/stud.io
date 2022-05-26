<script setup lang="ts">
import { getLongModSize, getLongLightSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidSize } from "assets/ts/parts/liquid"
import { STATE } from "@/assets/ts/main/state"

const props = defineProps<{
  baseSize: number,
  state: string,
  liquidRate: number
}>();

// get size
const {
  height: modHeight, width: modWidth, innerHeight: modInnerHeight, innerWidth: modInnerWidth,
  innerTop: modInnerTop, innerLeft: modInnerLeft
} = getLongModSize(props.baseSize)

// liquid 
const liquidWidth = getLiquidSize(modInnerWidth, props.liquidRate)
</script>

<template>
  <div class="relative  col-span-5 row-span-1" :style="{
    ...heightPx(modHeight), ...widthPx(modWidth)
  }">
    <!-- container  -->
    <img class="comp-default z-20" :style="{
      ...heightPx(modHeight)
    }" src="@/assets/img/parts/long.png" />

    <!-- liquid  -->
    <div class="comp-default bg-dark-red z-10" :style="{
      ...heightPx(modInnerHeight), ...widthPx(liquidWidth),
      ...topPx(modInnerTop), ...leftPx(modInnerLeft)
    }">
    </div>

  </div>
</template>
