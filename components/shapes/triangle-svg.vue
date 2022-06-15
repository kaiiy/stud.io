<script setup lang="ts">
const props = defineProps<{
  heightPx: number,
  widthPx: number,
  color: string,
}>();

const viewBoxStr = computed(() => `0, 0, ${props.widthPx}, ${props.heightPx}`)
const pointsStr = computed(() => `0 0, ${props.widthPx / 2} ${props.heightPx}, ${props.widthPx} 0`) 
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="widthPx" :height="heightPx" :viewBox="viewBoxStr">
    <polygon :points="pointsStr" :fill="color" />
  </svg>
</template>
