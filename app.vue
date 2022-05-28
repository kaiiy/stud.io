<script setup lang="ts">
import MiddleMod from "@/components/module/middle/index.vue"
import CircleMod from "@/components/module/circle/index.vue"
import LongMod from "@/components/module/long/index.vue"
import CircleBtn from "@/components/module/next/circle-btn.vue"
import LongBtn from "@/components/module/next/long-btn.vue"
import MiddleBtn from "@/components/module/next/middle-btn.vue"
import ModuleContainer from "@/components/main/module-container.vue"
import Switch from "@/components/module/switch.vue"

import { STATE, CIRCLE_STATE_LIST, MIDDLE_STATE_LIST, LONG_BTN_STATE_LIST } from "@/assets/ts/main/state"
import { potFillRate, cupFillRate } from "@/assets/ts/main/water/main"

// ======== config ========
const baseSize = 100
const intervalMsec = 1000

// ======== state ========
const circleStateIdx = ref(0)
const middleStateIdx = ref(0)
const currentLongTypeIdx = ref(0)
const switchState = ref<string>(STATE.SWITCH.OFF)

const currentCircleState = computed(() => CIRCLE_STATE_LIST[circleStateIdx.value])
const currentMiddleState = computed(() => MIDDLE_STATE_LIST[middleStateIdx.value])
const currentLongState = computed(() => {
  if (LONG_BTN_STATE_LIST[currentLongTypeIdx.value] === STATE.LONG_BTN.CIRCLE)
    return CIRCLE_STATE_LIST[circleStateIdx.value]
  return MIDDLE_STATE_LIST[middleStateIdx.value]
})

// circle
const addWaterIntoPot = (waterVol: number) => {
  potWater.value += waterVol
}

// middle 
const potWater = ref<number>(0)
const potRate = computed<number>(() => {
  return potFillRate(potWater.value)
})
const cupWater = ref<number>(0)
const cupRate = computed<number>(() => {
  return cupFillRate(cupWater.value)
})
const middleRate = computed(() => {
  if (currentMiddleState.value === STATE.MIDDLE.POT) return potRate.value
  return cupRate.value
})

// next 
const setNextCircleIdx = () => {
  circleStateIdx.value = (circleStateIdx.value + 1) % CIRCLE_STATE_LIST.length
}
const setNextMiddleIdx = () => {
  middleStateIdx.value = (middleStateIdx.value + 1) % MIDDLE_STATE_LIST.length
}
const setNextLongType = () => {
  currentLongTypeIdx.value = (currentLongTypeIdx.value + 1) % LONG_BTN_STATE_LIST.length
}

// switch 
const toggleSwitchState = () => {
  if (switchState.value === STATE.SWITCH.OFF) switchState.value = STATE.SWITCH.ON
  else switchState.value = STATE.SWITCH.OFF
}
</script>

<template>
  <ModuleContainer :base-size="baseSize">

    <!-- circle module  -->
    <CircleMod :state="currentCircleState" :interval-msec="intervalMsec" :base-size="baseSize"
      :handle-add-water-into-pot="addWaterIntoPot" />

    <!-- middle module  -->
    <MiddleMod :state="currentMiddleState" :liquid-rate="middleRate" :base-size="baseSize" />

    <!-- next module  -->
    <CircleBtn :state-idx="circleStateIdx" :handle-click="setNextCircleIdx" :base-size="baseSize" />
    <LongBtn :type-idx="currentLongTypeIdx" :base-size="baseSize" :handle-click="setNextLongType" />
    <MiddleBtn :state-idx="middleStateIdx" :base-size="baseSize" :handle-click="setNextMiddleIdx" />

    <!-- long module  -->
    <LongMod :state="currentLongState" :liquid-rate="0.8" :base-size="baseSize" />

    <!-- switch  -->
    <Switch :state="switchState" :handle-click="toggleSwitchState" :base-size="baseSize" />
  </ModuleContainer>

  <div>DEBUG</div>
  <div>[STATE]</div>
  <div>CIRCLE: {{ currentCircleState }}</div>
  <div>MIDDLE: {{ currentMiddleState }}</div>
  <div>LONG: {{ currentLongState }}</div>
  <!-- <div>
    {{ potWater }}
  </div>
  <div>
    {{ potRate }}
  </div> -->
</template>
