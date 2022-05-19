<script setup lang="ts">
import { getNextModSize } from "@/assets/ts/parts/get-size"
import { heightPx } from "assets/ts/style/to-px"

type Props = {
  baseSize: number,
  handleClick: () => void,
};
const props = defineProps<Props>();

const {
  height: modHeight,
} = getNextModSize(props.baseSize)

</script> 

<template>
  <img @click="handleClick()" class="cursor-pointer col-span-1 row-span-1" :style="{
    ...heightPx(modHeight)
  }" src="@/assets/img/parts/middle-btn.png" />
</template>
