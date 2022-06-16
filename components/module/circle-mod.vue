<script setup lang="ts">
import EllipseSvg from "@/components/shapes/ellipse-svg.vue"
import TriangleSvg from "@/components/shapes/triangle-svg.vue"

import { getCircleModSize, getCircleHvSize, circlePotTriangleSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { STATE } from "@/assets/ts/main/state"
import { Vec } from "@/assets/ts/math/vec"
import { convertAngle2Rate } from "@/assets/ts/math/angle"
import { hvAngleFromMouse } from "@/assets/ts/parts/circle/get-hv-angle"
import { transformOrigin, rotateOnly } from "assets/ts/style/transform"
import { getWaterMlFromValve } from "@/assets/ts/main/water"
import { COLOR } from "@/assets/ts/style/color"
import { MOUSE_AREA_ID, getMouseRelativePos, getCircleCenterPos, getMousePos } from "@/assets/ts/parts/circle/mouse"
import { getPotRad } from "@/assets/ts/parts/circle/pot"
import { getRemainingTime } from "@/assets/ts/main/timer"

const props = defineProps<{
  baseSize: number,
  state: string,
  intervalMsec: number,
  potRad: number,
  handleAddWaterIntoPot: Function, // type?
  handleUpdatePotRad: Function, // type?
  handleUpdateRemainingTimeRate: Function // type?
}>();

// style 
const {
  size: modSize, innerSize: modInnerSize, margin: modMargin
} = getCircleModSize(props.baseSize)
const {
  height: hvHeight, left: hvLeft, top: valveTop, rotateOriginX, hvRotateOriginY
} = getCircleHvSize(props.baseSize)
const {
  width: potTriangleWidth, maxHeight: potTriangleMaxHeight
} = circlePotTriangleSize(props.baseSize)
const circleRadius = modInnerSize / 2

// switch state 
const showValve = computed(() => props.state === STATE.CIRCLE.VALVE)
const showTimer = computed(() => props.state === STATE.CIRCLE.TIME)
const showPot = computed(() => props.state === STATE.CIRCLE.POT)

// init: 0
const valveAngle = ref(0)
const timerAngle = ref(0)
// init: false 
const isOpenValve = ref(false)
const isOpenTimer = ref(false)

let addWaterTimer: number;
let pureTimer: number;

// ======== mouse ======== 
// absolute area pos 
const mouseAreaPos = ref<Vec>({ x: 0, y: 0 })

// on click
const onClickMouseArea = (ev: MouseEvent) => {
  // detail: home/code_comment/mouse_relative_pos.png 
  const mouseRelativePos: Vec = getMouseRelativePos(ev, mouseAreaPos.value)
  const circleCenterPos: Vec = getCircleCenterPos(modInnerSize)

  // valve 
  if (props.state === STATE.CIRCLE.VALVE) {
    valveAngle.value = hvAngleFromMouse(mouseRelativePos, circleCenterPos)
    const valveAngleRate = convertAngle2Rate(valveAngle.value)

    if (isOpenValve.value === false && valveAngleRate !== 0) {
      // open 
      addWaterTimer = window.setInterval(addWaterIntoPot, props.intervalMsec, valveAngleRate)
      isOpenValve.value = true
    }
    else if (isOpenValve.value === true && valveAngleRate !== 0) {
      // change water volume 
      window.clearInterval(addWaterTimer)
      addWaterTimer = window.setInterval(addWaterIntoPot, props.intervalMsec, valveAngleRate)
    }
    else if (isOpenValve.value === true && valveAngleRate === 0) {
      // close 
      window.clearInterval(addWaterTimer)
      isOpenValve.value = false
    } else {
      throw new Error()
    }
  }
  // timer 
  else if (props.state === STATE.CIRCLE.TIME) {
    timerAngle.value = hvAngleFromMouse(mouseRelativePos, circleCenterPos)
    const timerRate = convertAngle2Rate(timerAngle.value)

    if (isOpenTimer.value === false && timerRate !== 0) {
      // set at first
      initRemainingTimeSec.value = remainingTimeSec.value = getRemainingTime(timerRate)
      pureTimer = window.setInterval(countTimer, props.intervalMsec, props.intervalMsec)
      isOpenTimer.value = true
    }
    else if (isOpenTimer.value === true && timerRate !== 0) {
      // change water volume 
      window.clearInterval(pureTimer)
      initRemainingTimeSec.value = remainingTimeSec.value = getRemainingTime(timerRate)
      pureTimer = window.setInterval(countTimer, props.intervalMsec, props.intervalMsec)
    }
    else if (isOpenTimer.value === true && timerRate === 0) {
      // close 
      initRemainingTimeSec.value = remainingTimeSec.value = 0
      window.clearInterval(pureTimer)
      isOpenTimer.value = false
    } else {
      throw new Error()
    }
  }
  // pot 
  else if (props.state === STATE.CIRCLE.POT) {
    const potRad = getPotRad((mouseRelativePos.y - circleCenterPos.y) / Math.sqrt(circleRadius ** 2 - (mouseRelativePos.x - circleCenterPos.x) ** 2))
    props.handleUpdatePotRad(potRad)
  }
  else { throw new Error() }
}

// ======== valve ======== 
const addWaterIntoPot = (valveRate: number) => {
  const waterVol = getWaterMlFromValve(props.intervalMsec, valveRate)
  props.handleAddWaterIntoPot(waterVol)
}

// ======== timer ========
const initRemainingTimeSec = ref(0)
const remainingTimeSec = ref(0)
const countTimer = (intervalMsec: number) => {
  remainingTimeSec.value -= intervalMsec / 1000
  if (remainingTimeSec.value < 0) {
    window.clearInterval(pureTimer)
    remainingTimeSec.value = 0
  }
  const remainingTimeRate = remainingTimeSec.value / initRemainingTimeSec.value
  props.handleUpdateRemainingTimeRate(remainingTimeRate)
}


// ======== pot ========
const potYRadiusPx = computed(() => circleRadius * Math.sin(props.potRad))
const potTrianglePx = computed(() => ({
  width: potTriangleWidth,
  height: potTriangleMaxHeight * (potYRadiusPx.value / circleRadius),
  left: (modSize - potTriangleWidth) / 2,
  top: modMargin + circleRadius + Math.sqrt(1 - ((potTriangleWidth / 2) / circleRadius) ** 2) * potYRadiusPx.value
}))

onMounted(() => {
  // set mouse area pos
  mouseAreaPos.value = getMousePos(MOUSE_AREA_ID)
})
</script>

<template>
  <div class="relative col-span-3 row-span-3" :style="{
    ...heightPx(modSize), ...widthPx(modSize)
  }">
    <!-- container  -->
    <img class="comp-default z-10" :style="{
      ...heightPx(modSize)
    }" src="@/assets/img/parts/circle.png" alt="" />

    <!-- valve  -->
    <img v-show="showValve" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(hvLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, hvRotateOriginY), ...rotateOnly(valveAngle)
    }" src="@/assets/img/parts/circle-valve.png" alt="" />
    <!-- time  -->
    <img v-show="showTimer" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(hvLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, hvRotateOriginY), ...rotateOnly(timerAngle)
    }" src="@/assets/img/parts/circle-hand.png" alt="" />

    <!-- pot  -->
    <EllipseSvg v-show="showPot" :x-radius="circleRadius" :y-radius="potYRadiusPx" :color="COLOR.DARK_PINK"
      class="absolute z-20" :style="{
        ...leftPx(valveTop), ...topPx(valveTop)
      }" />
    <TriangleSvg v-show="showPot" :height-px="potTrianglePx.height" :width-px="potTrianglePx.width"
      :color="COLOR.DARK_PINK" class="absolute z-20" :style="{
        ...leftPx(potTrianglePx.left), ...topPx(potTrianglePx.top)
      }" />

    <!-- mouse area  -->
    <div :id="MOUSE_AREA_ID" @click="onClickMouseArea" class="absolute cursor-pointer z-30" :style="{
      ...heightPx(modInnerSize), ...widthPx(modInnerSize),
      ...leftPx(valveTop), ...topPx(valveTop)
    }"></div>
  </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
