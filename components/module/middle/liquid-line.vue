<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <svg
    class="absolute"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="0" x2="100" y2="0" :stroke="color" />
  </svg>
</template>
