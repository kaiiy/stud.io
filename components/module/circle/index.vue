<script setup lang="ts">
import { getCircleModSize, getCircleHvSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { STATE } from "@/assets/ts/main/state"
import { Vec } from "@/assets/ts/math/vec"
import { convertAngle2Rate } from "@/assets/ts/math/angle"
import { hvAngleFromMouse } from "@/assets/ts/parts/circle/get-hv-angle"
import { transformOrigin, rotateOnly } from "assets/ts/style/transform"
import { getWaterMlFromValve } from "@/assets/ts/main/water/main"

const props = defineProps<{
  baseSize: number,
  state: string,
  intervalMsec: number,
  handleAddWaterIntoPot: Function, // type?
}>();
const emits = defineEmits<{
  (ev: "addWaterIntoPot"): number
}>();

// ======== style ========
const {
  size: modSize, innerSize: modInnerSize
} = getCircleModSize(props.baseSize)
const {
  height: hvHeight, left: hvLeft, top: valveTop, rotateOriginX: rotateOriginX,
  handRotateOriginY: handRotateOriginY, valveRotateOriginY: valveRotateOriginY
} = getCircleHvSize(props.baseSize)

// ======== valve/hand (hv)  ========
const showValve = computed(() => props.state === STATE.CIRCLE.VALVE)
const showHand = computed(() => !showValve)

// init: 0
const hvAngle = ref(0)
// init: false 
const isOpenValve = ref(false)
let addWaterTimer: number;

// ======== mouse ======== 
const MOUSE_AREA_ID = "mouse_area_id"
// absolute mouse area pos 
const mouseAreaPos = ref<Vec>({ x: 0, y: 0 })
const innerTopMidpoint = computed<Vec>(() => ({ x: modInnerSize / 2, y: 0 }))
const circleCenter = computed<Vec>(() => ({ x: modInnerSize / 2, y: modInnerSize / 2 }))

// on click
const onClickMouseArea = (ev: MouseEvent) => {
  // get hv angle 
  hvAngle.value = hvAngleFromMouse(ev, innerTopMidpoint.value, circleCenter.value, mouseAreaPos.value)

  const hvRate = convertAngle2Rate(hvAngle.value)

  // valve 
  if (props.state === STATE.CIRCLE.VALVE) {

    if (isOpenValve.value === false && hvRate !== 0) {
      // open 
      addWaterTimer = window.setInterval(addWaterIntoPot, props.intervalMsec, hvRate)
      isOpenValve.value = true
    }
    else if (isOpenValve.value === true && hvRate !== 0) {
      // change water volume 
      window.clearInterval(addWaterTimer)
      addWaterTimer = window.setInterval(addWaterIntoPot, props.intervalMsec, hvRate)
    }
    else if (isOpenValve.value === true && hvRate === 0) {
      // close 
      window.clearInterval(addWaterTimer)
      isOpenValve.value = false
    }
  }
}

// ======== valve function ======== 
const addWaterIntoPot = (hvRate: number) => {
  const waterVol = getWaterMlFromValve(props.intervalMsec, hvRate)
  props.handleAddWaterIntoPot(waterVol)
}

onMounted(() => {
  // set mouse area pos
  const mouseAreaBound = document.getElementById(MOUSE_AREA_ID)?.getBoundingClientRect()
  mouseAreaPos.value = { x: mouseAreaBound?.left ?? 0, y: mouseAreaBound?.top ?? 0 }
})
</script>

<template>
  <div class="relative col-span-3 row-span-3" :style="{
    ...heightPx(modSize), ...widthPx(modSize)
  }">
    <!-- container  -->
    <img class="comp-default z-10 " :style="{
      ...heightPx(modSize)
    }" src="@/assets/img/parts/circle.png" />

    <!-- valve/hand  -->
    <img v-show="showValve" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(hvLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, valveRotateOriginY), ...rotateOnly(hvAngle)
    }" src="@/assets/img/parts/circle-valve.png" />
    <img v-show="showHand" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(hvLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, handRotateOriginY), ...rotateOnly(hvAngle)
    }" src="@/assets/img/parts/circle-hand.png" />

    <!-- mouse area  -->
    <div :id="MOUSE_AREA_ID" @click="onClickMouseArea" class="absolute cursor-pointer z-30" :style="{
      ...heightPx(modInnerSize), ...widthPx(modInnerSize),
      ...leftPx(valveTop), ...topPx(valveTop)
    }" />
  </div>
</template>
