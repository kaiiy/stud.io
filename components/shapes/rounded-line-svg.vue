<script setup lang="ts">
const props = defineProps<{
  heightPx: number,
  widthPx: number,
  color: string,
}>();

const viewBoxStr = computed(() => `0, 0, ${props.widthPx}, ${props.heightPx}`)
const cornerRadius = computed(() => Math.min(props.heightPx / 2, props.widthPx / 2))
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="widthPx" :height="heightPx" :viewBox="viewBoxStr">
    <rect :width="widthPx" :height="heightPx" :fill="color" :rx="cornerRadius" :ry="cornerRadius"></rect>
  </svg>
</template>
