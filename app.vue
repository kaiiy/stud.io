<script setup lang="ts">
import Game from "@/components/main/game.vue"
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="text-left">
      <p class="font-noto-mono text-9xl">stud.io</p>
      <div class="font-noto-jp text-2xl flex items-center">
        <Icon name="prime:angle-double-right" size="48" />
        <p>Created by kaiiy</p>
      </div>
    </div>
    <button
      class="mt-12 px-6 py-3 text-2xl font-bold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
      Game Start
    </button>
  </div>




  <!-- <Game /> -->
</template>

<style scoped>
.font-noto-mono {
  font-family: 'Noto Sans Mono', sans-serif;
}

.font-noto-jp {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
