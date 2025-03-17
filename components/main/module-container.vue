<script setup lang="ts">
import { getModContainerSize, getModuleGap } from "@/assets/ts/parts/get-size";
import { heightPx, widthPx, gapPx } from "@/assets/ts/style/to-px";

const props = defineProps<{
  baseSize: number;
}>();

const { height, width } = getModContainerSize(props.baseSize);
const gap = getModuleGap(props.baseSize);
</script>

<template>
  <div
    class="grid grid-cols-5 grid-rows-5"
    :style="{
      ...heightPx(height),
      ...widthPx(width),
      ...gapPx(gap),
    }"
  >
    <slot></slot>
  </div>
</template>
