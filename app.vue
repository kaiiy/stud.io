<script setup lang="ts">
import MiddleMod from "@/components/module/middle/index.vue"
import CircleMod from "@/components/module/circle/index.vue"
import LongMod from "@/components/module/long/index.vue"
import { STATE } from "@/assets/ts/main/state"
import CircleBtn from "@/components/module/next/circle-btn.vue"
import LongBtn from "@/components/module/next/long-btn.vue"
import MiddleBtn from "@/components/module/next/middle-btn.vue"
import ModuleContainer from "@/components/main/module-container.vue"

const baseSize = 100


// amount of water in pot/cup 
const potWater = ref<number>(0)
const cupWater = ref<number>(0)

const clickFunc = () => { }

</script>

<template>
  <ModuleContainer :base-size="baseSize">

    <!-- circle module  -->
    <CircleMod :state="STATE.CIRCLE.VALVE" :interval-msec="100" :base-size="baseSize" />

    <!-- middle module  -->
    <MiddleMod :liquid-rate="0.7" :base-size="baseSize" />

    <!-- next module  -->
    <CircleBtn :handle-click="clickFunc" :base-size="baseSize" />
    <MiddleBtn :base-size="baseSize" :handle-click="clickFunc" />
    <LongBtn :base-size="baseSize" :handle-click="clickFunc" />

    <!-- long module  -->
    <LongMod :state="STATE.LONG.TIME" :liquid-rate="0.8" :base-size="baseSize" />
  </ModuleContainer>
</template>
