<script setup lang="ts">
import MiddleMod from "@/components/module/middle/index.vue"
import CircleMod from "@/components/module/circle/index.vue"
import LongMod from "@/components/module/long/index.vue"
import { STATE } from "@/assets/ts/main/state"
import CircleBtn from "@/components/module/next/circle-btn.vue"
import LongBtn from "@/components/module/next/long-btn.vue"
import MiddleBtn from "@/components/module/next/middle-btn.vue"
import ModuleContainer from "@/components/main/module-container.vue"
import { potFillRate } from "@/assets/ts/main/water/main"

// ======== config ========
const baseSize = 100
const intervalMsec = 1000

// amount of water in pot/cup 
const potWater = ref<number>(0)
const potRate = computed<number>(() => {
  return potFillRate(potWater.value)
})

const cupWater = ref<number>(0)

const addWaterIntoPot = (waterVol: number) => {
  potWater.value += waterVol
}


const clickFunc = () => { }

</script>

<template>
  <ModuleContainer :base-size="baseSize">

    <!-- circle module  -->
    <CircleMod :state="STATE.CIRCLE.VALVE" :interval-msec="intervalMsec" :base-size="baseSize"
      :handle-add-water-into-pot="addWaterIntoPot" />

    <!-- middle module  -->
    <MiddleMod :liquid-rate="potRate" :base-size="baseSize" />

    <!-- next module  -->
    <CircleBtn :handle-click="clickFunc" :base-size="baseSize" />
    <MiddleBtn :base-size="baseSize" :handle-click="clickFunc" />
    <LongBtn :base-size="baseSize" :handle-click="clickFunc" />

    <!-- long module  -->
    <LongMod :state="STATE.LONG.TIME" :liquid-rate="0.8" :base-size="baseSize" />
  </ModuleContainer>

  <div>
    {{ potWater }}
  </div>
  <div>
    {{ potRate }}
  </div>
</template>
