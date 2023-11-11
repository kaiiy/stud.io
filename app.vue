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

import { STATE, getCurrentLongState } from "@/assets/ts/main/state"
import { potFillRate, cupFillRate } from "@/assets/ts/main/water"
import { convertRad2Deg } from "@/assets/ts/math/angle"
import { useNumberState } from "@/assets/states/base"
import { useSwitchState } from "@/assets/states/switch"
import { useCircleStateIdx, useMiddleStateIdx, useCurrentLongTypeIdx } from "@/assets/states/state-idx"


// ======== config ========
const baseSize = 100 // todo 
const intervalMsec = 1000 // todo 

// ======== state and state-handler ========
const [circleStateIdx, setNextCircleIdx, currentCircleState] = useCircleStateIdx(0)
const [middleStateIdx, setNextMiddleIdx, currentMiddleState] = useMiddleStateIdx(0)
const [currentLongTypeIdx, setNextLongType] = useCurrentLongTypeIdx(0)

const currentLongState = computed(() =>
  getCurrentLongState(currentLongTypeIdx.value, circleStateIdx.value, middleStateIdx.value))

// circle
const [circleInitTimeSec, updateCircleInitTimeSec] = useNumberState(0)
const [circlePotRad, updateCirclePotRad] = useNumberState(1)
const [circleRemainingTimeRate, updateCircleRemainingTimeRate] = useNumberState(0)

const addWaterIntoPot = (waterVol: number) => {
  if (potCoverDeg.value !== -90 && waterVol > 0) {
    throwGameErr("Pot cover is not opened")
    return
  }
  potWater.value += waterVol
}

// middle 
const potWater = ref<number>(0)
const potRate = computed<number>(() => {
  const _rate = potFillRate(potWater.value)
  if (_rate >= 1) throwGameErr("Overflowing water in the pot")
  return _rate
})
const [potCoverDeg] = useNumberState(0)
const [cupCoverDeg] = useNumberState(0)

const cupWater = ref<number>(0)
const cupRate = computed<number>(() => cupFillRate(cupWater.value))

const middleRate = computed(() => {
  const state = currentMiddleState.value
  if (state === STATE.MIDDLE.POT) return potRate.value
  else if (state === STATE.MIDDLE.CUP) return cupRate.value
  else throw new Error("middleRate: invalid state")
})
const coverDeg = computed(() => {
  const state = currentMiddleState.value
  if (state === STATE.MIDDLE.POT) return potCoverDeg.value
  else if (state === STATE.MIDDLE.CUP) return cupCoverDeg.value
  else throw new Error("CoverDeg: invalid state")
})
const updateCoverDeg = (newDeg: number) => {
  const state = currentMiddleState.value
  if (state === STATE.MIDDLE.POT) potCoverDeg.value = newDeg
  else if (state === STATE.MIDDLE.CUP) cupCoverDeg.value = newDeg
  else throw new Error("updateCoverDeg: invalid state")
}

// water temperature
const [potTemperature, updatePotTemperature] = useNumberState(20)
const [cupTemperature, updateCupTemperature] = useNumberState(20)

// long 
const longVal = computed(() => {
  let liquidRate = 0, maxNum = 0, minNum = 0

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
  else if (currentState === STATE.CIRCLE.POT) {
    maxNum = 90
    minNum = 0
    liquidRate = convertRad2Deg(circlePotRad.value) / (maxNum - minNum)
  }
  // pot: temperature (middle) 
  else if (currentState === STATE.MIDDLE.POT) {
    maxNum = 100
    minNum = 0
    // TODO: 温度変化 
    liquidRate = potTemperature.value / (maxNum - minNum)
  }
  // cup: temperature (middle) 
  else if (currentState === STATE.MIDDLE.CUP) {
    maxNum = 100
    minNum = 0
    // TODO: 温度変化 
    liquidRate = cupTemperature.value / (maxNum - minNum)
  }
  else throw new Error("longVal: invalid state")

  console.assert(liquidRate >= 0 && liquidRate <= 1, "liquidRate is invalid")
  return { liquidRate, maxNum, minNum }
})

// switch 
const [switchState, toggleSwitchState] = useSwitchState(STATE.SWITCH.OFF)

// Modal 
const isOpen = ref(false)
defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => { isOpen.value = false }
  }
})

// Game Err 
const gameErr = ref("None")
const throwGameErr = (msg: string) => {
  gameErr.value = msg
}
</script>

<template>
  <!-- TODO: marginTop  -->
  <div class="flex">
    <div class="w-1/2">
      <ModuleContainer :base-size="baseSize" :style="{
        marginTop: String(baseSize * 2.5) + 'px'
      }">
        <!-- circle module  -->
        <CircleMod :state="currentCircleState" :interval-msec="intervalMsec" :pot-rad="circlePotRad" :base-size="baseSize"
          :handle-add-water-into-pot="addWaterIntoPot" :handle-update-pot-rad="updateCirclePotRad"
          :handle-update-remaining-time-rate="updateCircleRemainingTimeRate"
          :handle-update-init-time-sec="updateCircleInitTimeSec" />

        <!-- middle module  -->
        <MiddleWrapper>
          <CoverMod :deg="coverDeg" :update-deg="updateCoverDeg" :base-size="baseSize" />
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
    </div>
    <div class="w-1/2">
      <div>========</div>
      <div>DEBUG</div>
      <div>CIRCLE: {{ currentCircleState }}, POT: {{ convertRad2Deg(circlePotRad) }}, R_TIME: {{ circleRemainingTimeRate
      }},
        {{ circleInitTimeSec }}
      </div>
      <div>MIDDLE: {{ currentMiddleState }}</div>
      <div>LONG: {{ currentLongState }}</div>
      <div>POT_RATE: {{ potRate }}</div>
      <div>liquidRate: {{ longVal.liquidRate }}</div>

      <div>========</div>
      <div>ERR: {{ gameErr }}</div>
    </div>
  </div>

  <!-- <div>
      <UButton label="Open" @click="isOpen = true" />

      <UModal v-model="isOpen">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                Game Over!
              </h3>
            </div>
          </template>
          リロードしてください
        </UCard>
      </UModal>
    </div> -->
</template>
