<script setup lang="ts">
import { getCircleModSize, getCircleHvSize } from "assets/ts/materials/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { STATE } from "@/assets/ts/main/state"
import { Vec } from "@/assets/ts/math/vec"
import { getHvAngle } from "@/assets/ts/materials/circle/get-hv-angle"
import { transformOrigin, rotateOnly } from "assets/ts/style/transform"

type Props = {
  baseSize: number,
  state: string
};
const props = defineProps<Props>();

// ======== get size ========
const {
  size: modSize, innerSize: modInnerSize
} = getCircleModSize(props.baseSize)
const {
  height: hvHeight, left: valveLeft, top: valveTop, rotateOriginX: rotateOriginX, handRotateOriginY: handRotateOriginY, valveRotateOriginY: valveRotateOriginY
} = getCircleHvSize(props.baseSize)

// ======== valve/hand (hv)  ========
const showValve = computed(() => props.state === STATE.CIRCLE.VALVE)
const showHand = computed(() => !showValve)
const hvAngle = ref(3)

// ======== mouse ======== 
const MOUSE_AREA_ID = "mouse_area_id"
// absolute mouse area pos 
const mouseAreaPos = reactive<Vec>({
  x: 0, y: 0
})
const innerTopMidpoint = computed<Vec>(() => ({
  x: modInnerSize / 2, y: 0
}))
const circleCenter = computed<Vec>(() => ({
  x: modInnerSize / 2, y: modInnerSize / 2
}))
// clicked 
const getMousePos = (ev: MouseEvent) => {
  // relative clicked pos 
  const mousePos: Vec = {
    x: ev.clientX - mouseAreaPos.x,
    y: ev.clientY - mouseAreaPos.y
  }

  hvAngle.value = getHvAngle(innerTopMidpoint.value, circleCenter.value, mousePos)
}

onMounted(() => {
  const mouseAreaEle = document.getElementById(MOUSE_AREA_ID)
  const mouseAreaBound = mouseAreaEle.getBoundingClientRect()
  mouseAreaPos.x = mouseAreaBound.left
  mouseAreaPos.y = mouseAreaBound.top
})
</script>

<template>
  <div class="relative" :style="{
    ...heightPx(modSize), ...widthPx(modSize)
  }">
    <!-- container  -->
    <img class="comp-default z-10" :style="{
      ...heightPx(modSize)
    }" src="@/assets/img/materials/circle.png" />

    <!-- valve/hand  -->
    <img v-show="showValve" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(valveLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, valveRotateOriginY), ...rotateOnly(hvAngle)
    }" src="@/assets/img/materials/circle-valve.png">
    <img v-show="showHand" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(valveLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, handRotateOriginY), ...rotateOnly(hvAngle)
    }" src="@/assets/img/materials/circle-hand.png">

    <!-- mouse area  -->
    <div :id="MOUSE_AREA_ID" @click="getMousePos" class="absolute cursor-pointer z-30" :style="{
      ...heightPx(modInnerSize), ...widthPx(modInnerSize),
      ...leftPx(valveTop), ...topPx(valveTop)
    }" />
  </div>
</template>
