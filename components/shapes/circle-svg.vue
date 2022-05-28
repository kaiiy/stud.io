<script setup lang="ts">
const props = defineProps<{
  radius: number,
  color: string,
}>();

const viewBoxStr = computed(() => `0, 0, ${props.radius * 2}, ${props.radius * 2}`)
</script>

<template>
  <svg :width="radius * 2" :height="radius * 2" :viewBox="viewBoxStr" xmlns="http://www.w3.org/2000/svg">
    <circle :cx="radius" :cy="radius" :r="radius" :fill="color" />
  </svg>
</template>
