<script setup lang="ts">
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"

const sectorCanvas = ref<HTMLCanvasElement>(null);

onMounted(() => {
  const ctx = sectorCanvas.value.getContext('2d')
  ctx.beginPath();
  ctx.arc(50, 50, 20, -Math.PI / 2, Math.PI);
  ctx.stroke();
})
</script>

<template>
  <canvas ref="sectorCanvas" width="200" height="200" style="border:1px solid"></canvas>
</template>
