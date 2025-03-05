<script setup lang="ts">
import Game from "@/components/main/game.vue"
import SwitchBase from "@/components/module/switch/base.vue"
import { heightPx, topPx, leftPx, widthPx } from "assets/ts/style/to-px"
import { COLOR } from "@/assets/ts/style/color"
import BtnBase from "@/components/module/next/btn-base.vue"

const hasStarted = ref(false)
const startGame = () => {
  hasStarted.value = true
}


const windowWidth = ref(window.innerWidth);

const updateWidth = (): void => {
  windowWidth.value = window.innerWidth;
};

onMounted((): void => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted((): void => {
  window.removeEventListener('resize', updateWidth);
});

const btnSize = computed(() => {
  if (windowWidth.value < 640) {
    return { height: '100px', width: '100px' };
  } else if (windowWidth.value < 1024) {
    return { height: '150px', width: '150px' };
  } else {
    return { height: '176px', width: '176px' };
  }
});
</script>

<template>
  <div v-if="!hasStarted" class="flex flex-col items-center justify-center h-screen">
    <div class="text-left">
      <div class="flex items-end">
        <BtnBase @click="startGame" class="cursor-pointer hover-bright" :style="btnSize" :base-color="COLOR.DARK_PURPLE"
          :inner-color="COLOR.LIGHT_PURPLE" />
        <div class="ml-8">
          <p class="font-noto-mono text-5xl sm:text-7xl md:text-9xl">
            stud.io
          </p>
          <div class="font-noto-jp text-2xl flex items-center">
            <Icon name="prime:angle-double-right" size="48" />
            <p>Created by kaiiy</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Game v-if="hasStarted" />
</template>

<style scoped>
.font-noto-mono {
  font-family: 'Noto Sans Mono', sans-serif;
}

.font-noto-jp {
  font-family: 'Noto Sans JP', sans-serif;
}


.hover-bright {
  transition: filter 0.3s ease;
}

.hover-bright:hover {
  filter: brightness(0.9);
}
</style>
