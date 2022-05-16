<script setup lang="ts">
import { getLongModSize, getLongLightSize } from "assets/ts/materials/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidSize } from "assets/ts/materials/liquid"
import { STATE } from "@/assets/ts/main/state"

type Props = {
  baseSize: number,
  state: string,
  liquidRate: number
};
const props = defineProps<Props>();

// get size
const {
  height: modHeight, width: modWidth, innerHeight: modInnerHeight, innerWidth: modInnerWidth,
  innerTop: modInnerTop, innerLeft: modInnerLeft
} = getLongModSize(props.baseSize)
const {
  height: lightHeight, top: lightTop, left: lightLeft
} = getLongLightSize(props.baseSize)

// light 
const showCircleLight = computed<boolean>(() => {
  if (props.state === STATE.LONG.VALVE || props.state === STATE.LONG.TIME) return true
  return false
})
const showMiddleLight = computed<boolean>(() => !showCircleLight)

// liquid 
const liquidWidth = getLiquidSize(modInnerWidth, props.liquidRate)
</script>

<template>
  <div class="relative" :style="{
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

    <!-- light  -->
    <img v-show="showCircleLight" class="comp-default z-30" :style="{
      ...heightPx(lightHeight), ...topPx(lightTop), ...leftPx(lightLeft)
    }" src="@/assets/img/parts/long-light-circle.png" />
    <img v-show="showMiddleLight" class="comp-default z-30" :style="{
      ...heightPx(lightHeight), ...topPx(lightTop), ...leftPx(lightLeft)
    }" src="@/assets/img/parts/long-light-middle.png" />
  </div>
</template>
