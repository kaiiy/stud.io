<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <svg
    version="1.1"
    viewBox="0 0 84.667 84.667"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2.8221-9.2207e-6c-1.5635 0-2.8221 1.2585-2.8221 2.8221v79.023c0 1.5635 1.2585 2.8221 2.8221 2.8221h79.023c1.5635 0 2.8221-1.2585 2.8221-2.8221v-79.023c0-1.5635-1.2585-2.8221-2.8221-2.8221zm39.511 9.2604a33.073 33.073 0 0 1 33.073 33.073 33.073 33.073 0 0 1-33.073 33.073 33.073 33.073 0 0 1-33.073-33.073 33.073 33.073 0 0 1 33.073-33.073z"
      :fill="color"
    />
  </svg>
</template>
