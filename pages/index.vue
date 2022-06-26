<script setup lang="ts">
import MiddleMod from "@/components/module/middle-mod.vue"
import CircleMod from "@/components/module/circle-mod.vue"
import LongMod from "@/components/module/long-mod.vue"
import CircleBtn from "@/components/module/next/circle-btn.vue"
import LongBtn from "@/components/module/next/long-btn.vue"
import MiddleBtn from "@/components/module/next/middle-btn.vue"
import ModuleContainer from "@/components/main/module-container.vue"
import SwitchBtn from "@/components/module/switch-btn.vue"
import CoverMod from "@/components/module/cover-mod.vue"
import MiddleWrapper from "@/components/module/middle-wrapper.vue"

import { STATE, CIRCLE_STATE_LIST, MIDDLE_STATE_LIST, LONG_BTN_STATE_LIST, getCurrentLongState } from "@/assets/ts/main/state"
import { potFillRate, cupFillRate } from "@/assets/ts/main/water"

// ======== config ========
const baseSize = 100 // todo 
const intervalMsec = 1000 // todo 

// ======== state ========
// init: 0 
const circleStateIdx = ref(0)
const middleStateIdx = ref(0)
const currentLongTypeIdx = ref(0)

const switchState = ref<string>(STATE.SWITCH.OFF)

const currentCircleState = computed(() => CIRCLE_STATE_LIST[circleStateIdx.value])
const currentMiddleState = computed(() => MIDDLE_STATE_LIST[middleStateIdx.value])
const currentLongState = computed(() =>
  getCurrentLongState(currentLongTypeIdx.value, circleStateIdx.value, middleStateIdx.value))

// circle
const circlePotRad = ref(0) // init: 1
const circleRemainingTimeRate = ref(1) //  0<=val<=1 (init: 1)
const circleInitTimeSec = ref(0)
const addWaterIntoPot = (waterVol: number) => { potWater.value += waterVol }
const updateCirclePotRad = (newPotRad: number) => { circlePotRad.value = newPotRad }
const updateCircleRemainingTimeRate = (newTimeRate: number) => { circleRemainingTimeRate.value = newTimeRate }
const updateCircleInitTimeSec = (newInitTime: number) => {
  circleInitTimeSec.value = Math.floor(newInitTime)
}

// middle 
const potWater = ref<number>(0)
const potRate = computed<number>(() => potFillRate(potWater.value))
const cupWater = ref<number>(0)
const cupRate = computed<number>(() => cupFillRate(cupWater.value))
const middleRate = computed(() => {
  if (currentMiddleState.value === STATE.MIDDLE.POT) return potRate.value
  return cupRate.value
})

// next btn
const setNextCircleIdx = () => { circleStateIdx.value = (circleStateIdx.value + 1) % CIRCLE_STATE_LIST.length }
const setNextMiddleIdx = () => { middleStateIdx.value = (middleStateIdx.value + 1) % MIDDLE_STATE_LIST.length }
const setNextLongType = () => { currentLongTypeIdx.value = (currentLongTypeIdx.value + 1) % LONG_BTN_STATE_LIST.length }

// long 
const longVal = computed(() => {
  let liquidRate: number, maxNum: number, minNum: number
  liquidRate = maxNum = minNum = 0

  const currentState = currentLongState.value

  // valve: water temperature (circle) 
  if (currentState === STATE.CIRCLE.VALVE) {
    maxNum = 100
    minNum = 0
    liquidRate = 20 / (maxNum - minNum)
  }
  // time: remaining time rate (circle) 
  else if (currentState === STATE.CIRCLE.TIME) {
    maxNum = circleInitTimeSec.value
    minNum = 0
    liquidRate = circleRemainingTimeRate.value
  }
  // pot: degree (circle) 
  // pot: temperature (middle) 
  // cup: (middle) 

  return {
    liquidRate, maxNum, minNum
  }
})


// switch 
const toggleSwitchState = () => {
  if (switchState.value === STATE.SWITCH.OFF) switchState.value = STATE.SWITCH.ON
  else switchState.value = STATE.SWITCH.OFF
}
</script>

<template>
  <ModuleContainer :base-size="baseSize">
    <!-- circle module  -->
    <CircleMod :state="currentCircleState" :interval-msec="intervalMsec" :pot-rad="circlePotRad" :base-size="baseSize"
      :handle-add-water-into-pot="addWaterIntoPot" :handle-update-pot-rad="updateCirclePotRad"
      :handle-update-remaining-time-rate="updateCircleRemainingTimeRate"
      :handle-update-init-time-sec="updateCircleInitTimeSec" />

    <!-- middle module  -->
    <MiddleWrapper>
      <CoverMod :base-size="baseSize" />
      <MiddleMod :state="currentMiddleState" :liquid-rate="middleRate" :base-size="baseSize" />
    </MiddleWrapper>

    <!-- next module  -->
    <CircleBtn :state-idx="circleStateIdx" :handle-click="setNextCircleIdx" :base-size="baseSize" />
    <LongBtn :type-idx="currentLongTypeIdx" :base-size="baseSize" :handle-click="setNextLongType" />
    <MiddleBtn :state-idx="middleStateIdx" :base-size="baseSize" :handle-click="setNextMiddleIdx" />

    <!-- long module  -->
    <LongMod :liquid-rate="longVal.liquidRate" :max-num="longVal.maxNum" :min-mum="longVal.minNum"
      :base-size="baseSize" />

    <!-- switch  -->
    <SwitchBtn :state="switchState" :handle-click="toggleSwitchState" :base-size="baseSize" />
  </ModuleContainer>

  <div>========</div>
  <div>DEBUG</div>
  <div>CIRCLE: {{ currentCircleState }}, POT: {{ circlePotRad * 180 / Math.PI }}, R_TIME: {{ circleRemainingTimeRate }},
    {{ circleInitTimeSec }}
  </div>
  <div>MIDDLE: {{ currentMiddleState }}</div>
  <div>LONG: {{ currentLongState }}</div>
</template>
