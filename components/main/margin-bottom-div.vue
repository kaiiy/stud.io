<script setup lang="ts">
import { marginBottomPx } from "@/assets/ts/style/to-px"
import { getModuleGap } from "@/assets/ts/parts/get-size"

type Props = {
  baseSize: number
}
const props = defineProps<Props>();

const modMargin = getModuleGap(props.baseSize)
</script>

<template>
  <div :style="{ ...marginBottomPx(modMargin) }">
    <slot></slot>
  </div>
</template>
