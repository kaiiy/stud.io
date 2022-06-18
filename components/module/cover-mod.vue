<script setup lang="ts" >
import RoundedLineSvg from "@/components/shapes/rounded-line-svg.vue"

import { COLOR } from "@/assets/ts/style/color"
import { getModuleGap, coverModSize } from '@/assets/ts/parts/get-size';
import { marginBottomPx } from "@/assets/ts/style/to-px"

const props = defineProps<{
  baseSize: number,
}>();

const {
  height: modHeight, width: modWidth,
} = coverModSize(props.baseSize)
</script>

<template>
  <div :style="{ ...marginBottomPx(getModuleGap(baseSize)) }">
    <RoundedLineSvg :width-px="modWidth" :height-px="modHeight" :color="COLOR.LIGHT_PURPLE" />
  </div>
</template>
