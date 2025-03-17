<script setup lang="ts">
const props = defineProps<{
  xRadius: number;
  yRadius: number;
  color: string;
}>();

const viewBoxStr = computed(
  () => `0, 0, ${props.xRadius * 2}, ${props.xRadius * 2}`,
);
</script>

<template>
  <svg
    :width="xRadius * 2"
    :height="xRadius * 2"
    :viewBox="viewBoxStr"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      :cx="xRadius"
      :cy="xRadius"
      :rx="xRadius"
      :ry="yRadius"
      :fill="color"
    />
  </svg>
</template>
