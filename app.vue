<script setup lang="ts">
import MiddleMod from "@/components/module/middle/index.vue"
import CircleMod from "@/components/module/circle/index.vue"
import LongMod from "@/components/module/long/index.vue"
import { STATE } from "@/assets/ts/main/state"

// amount of water in pot/cup 
const potWater = ref<number>(0)
const cupWater = ref<number>(0)

onMounted(() => {

})
</script>

<template>
  <!-- <LongMod :base-size="150" :state="STATE.LONG.TIME" :liquid-rate="0.8" />  -->
  <!-- <CircleMod :state="STATE.CIRCLE.VALVE" :base-size="150" /> -->
  <MiddleMod :base-size="100" :liquid-rate="0.7" />  
</template>
