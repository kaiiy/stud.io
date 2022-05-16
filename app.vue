<script setup lang="ts">
import MiddleMod from "@/components/module/middle/index.vue"
import CircleMod from "@/components/module/circle/index.vue"
import LongMod from "@/components/module/long/index.vue"
import { STATE } from "@/assets/ts/main/state"
import CircleBtn from "@/components/module/next/circle-btn.vue"
import LongBtn from "@/components/module/next/long-btn.vue"
import MiddleBtn from "@/components/module/next/middle-btn.vue"
import ModuleContainer from "@/components/main/module-container.vue"
import MarginRightDiv from "@/components/main/margin-right-div.vue"
import MarginBottomDiv from "@/components/main/margin-bottom-div.vue"

const baseSize = 100


// amount of water in pot/cup 
const potWater = ref<number>(0)
const cupWater = ref<number>(0)

const clickFunc = () => { }

</script>

<template>
  <ModuleContainer>
    <MarginBottomDiv class="flex" :base-size="baseSize">
      <MarginRightDiv :base-size="baseSize">

        <!-- circle module  -->
        <MarginBottomDiv :base-size="baseSize">
          <CircleMod :state="STATE.CIRCLE.VALVE" :base-size="baseSize" />
        </MarginBottomDiv>

        <!-- next module  -->
        <div class="flex">
          <MarginRightDiv :base-size="baseSize">
            <CircleBtn :handle-click="clickFunc" :base-size="baseSize" />
          </MarginRightDiv>
          <MarginRightDiv :base-size="baseSize">
            <MiddleBtn :base-size="baseSize" :handle-click="clickFunc" />
          </MarginRightDiv>
          <LongBtn :base-size="baseSize" :handle-click="clickFunc" />
        </div>
      </MarginRightDiv>

      <!-- middle module  -->
      <MiddleMod :liquid-rate="0.7" :base-size="baseSize" />
    </MarginBottomDiv>

    <!-- long module  -->
    <LongMod :state="STATE.LONG.TIME" :liquid-rate="0.8" :base-size="baseSize" />
  </ModuleContainer>
</template>
