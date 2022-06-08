<script setup lang="ts">
import { getCircleModSize, getCircleHvSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { STATE } from "@/assets/ts/main/state"
import { Vec } from "@/assets/ts/math/vec"
import { convertAngle2Rate } from "@/assets/ts/math/angle"
import { hvAngleFromMouse } from "@/assets/ts/parts/circle/get-hv-angle"
import { transformOrigin, rotateOnly } from "assets/ts/style/transform"
import { getWaterMlFromValve } from "@/assets/ts/main/water/main"
import EllipseSvg from "@/components/shapes/ellipse-svg.vue"
import { COLOR } from "@/assets/ts/style/color"
import { MOUSE_AREA_ID, getMouseRelativePos, getCircleCenterPos } from "./circle/mouse"

const props = defineProps<{
  baseSize: number,
  state: string,
  intervalMsec: number,
  handleAddWaterIntoPot: Function, // type?
}>();

// style 
const {
  size: modSize, innerSize: modInnerSize, innerRadius,
} = getCircleModSize(props.baseSize)
const {
  height: hvHeight, left: hvLeft, top: valveTop, rotateOriginX: rotateOriginX,
  handRotateOriginY: handRotateOriginY, valveRotateOriginY: valveRotateOriginY
} = getCircleHvSize(props.baseSize)

// switch state 
const showValve = computed(() => props.state === STATE.CIRCLE.VALVE)
const showTimer = computed(() => props.state === STATE.CIRCLE.TIME)
const showPot = computed(() => props.state === STATE.CIRCLE.POT)

// init: 0
const valveAngle = ref(0)
const handAngle = ref(0)
// init: false 
const isOpenValve = ref(false)
let addWaterTimer: number;

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
    const hvRate = convertAngle2Rate(valveAngle.value)

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
  // timer 
  else if (props.state === STATE.CIRCLE.TIME) {
    // todo 
  }
  // pot 
  else if (props.state === STATE.CIRCLE.POT) {
    potYRadiusPx.value = Math.abs(mouseRelativePos.y - circleCenterPos.y)
  }
  else { throw new Error("non-existent state") }
}

// ======== valve function ======== 
const addWaterIntoPot = (hvRate: number) => {
  const waterVol = getWaterMlFromValve(props.intervalMsec, hvRate)
  props.handleAddWaterIntoPot(waterVol)
}

// ======== pot ========
const potYRadiusPx = ref(0)

onMounted(() => {
  // set mouse area pos
  const mouseAreaBound = document.getElementById(MOUSE_AREA_ID)?.getBoundingClientRect()
  mouseAreaPos.value = { x: mouseAreaBound?.left ?? 0, y: mouseAreaBound?.top ?? 0 }
  if (mouseAreaBound === void 0) throw new Error("can't get mouse area")
})
</script>

<template>
  <div class="relative col-span-3 row-span-3" :style="{
    ...heightPx(modSize), ...widthPx(modSize)
  }">
    <!-- container  -->
    <img class="comp-default z-10 " :style="{
      ...heightPx(modSize)
    }" src="@/assets/img/parts/circle.png" alt="" />

    <!-- valve  -->
    <img v-show="showValve" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(hvLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, valveRotateOriginY), ...rotateOnly(valveAngle)
    }" src="@/assets/img/parts/circle-valve.png" alt="" />
    <!-- time  -->
    <img v-show="showTimer" class="comp-default z-20" :style="{
      ...heightPx(hvHeight), ...leftPx(hvLeft), ...topPx(valveTop),
      ...transformOrigin(rotateOriginX, handRotateOriginY), ...rotateOnly(handAngle)
    }" src="@/assets/img/parts/circle-hand.png" alt="" />

    <!-- pot  -->
    <!-- todo: y-radius  -->
    <EllipseSvg v-show="showPot" :x-radius="innerRadius" :y-radius="potYRadiusPx" :color="COLOR.DARK_PINK"
      class="absolute" :style="{
        ...leftPx(valveTop), ...topPx(valveTop)
      }" />

    <!-- mouse area  -->
    <div :id="MOUSE_AREA_ID" @click="onClickMouseArea" class="absolute cursor-pointer z-30" :style="{
      ...heightPx(modInnerSize), ...widthPx(modInnerSize),
      ...leftPx(valveTop), ...topPx(valveTop)
    }"></div>
  </div>
</template>
