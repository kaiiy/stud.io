<script setup lang="ts">
defineProps<{
  baseColor: string;
  innerColor: string;
}>();
</script>

<template>
  <svg
    version="1.1"
    viewBox="0 0 26.458 26.458"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-58.208 -87.312)">
      <rect
        x="58.208"
        y="87.312"
        width="26.458"
        height="26.458"
        ry="2.6459"
        :fill="innerColor"
      />
      <path
        transform="matrix(-.035799 .035799 -.035799 -.035799 68.718 113.7)"
        d="m-61.695 134.3-171.56 171.56-62.797-234.36 117.18 31.398z"
        :fill="baseColor"
        :stroke="baseColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="18.678"
      />
    </g>
  </svg>
</template>
