<script setup lang="ts">
import MiddleMod from "@/components/materials/middle/index.vue"
import CircleMod from "@/components/materials/circle/index.vue"
import LongMod from "@/components/materials/long/index.vue"
import { STATE } from "@/assets/ts/main/state"

// amount of water in pot/cup 
const potWater = ref<number>(0)
const cupWater = ref<number>(0)

onMounted(() => {

})
</script>

<template>
  <!-- <MiddleMod :base-size="200" :liquid-rate="0.9" />  -->
  <LongMod :base-size="150" :state="STATE.LONG.TIME" :liquid-rate="0.8" />
</template>
