<script setup lang="ts" >
import RoundedLineSvg from "@/components/shapes/rounded-line-svg.vue"
import { COLOR } from "@/assets/ts/style/color"
import { getModuleGap, coverModSize } from '@/assets/ts/parts/get-size';
import { marginBottomPx, widthPx, heightPx, bottomPx, leftPx } from "@/assets/ts/style/to-px"
import { rotateDegOnly, transformOrigin } from "@/assets/ts/style/transform"
import { AREA_ID } from "@/assets/ts/parts/cover"
import { getMousePos } from "@/assets/ts/parts/mouse"
import { Vec } from "@/assets/ts/math/vec"

const props = defineProps<{
  baseSize: number,
}>();

const {
  height: modHeight, width: modWidth,
} = coverModSize(props.baseSize)

const mouseAreaPos = ref<Vec>({ x: 0, y: 0 })
const coverDeg = ref(-40)

onMounted(() => {
  mouseAreaPos.value = getMousePos(AREA_ID)
  console.table(mouseAreaPos)
})
</script>

<template>
  <div class="relative" :style="{
    ...marginBottomPx(getModuleGap(baseSize)),
    ...widthPx(modWidth), ...heightPx(modHeight)
  }">
    <div :id="AREA_ID" class="absolute cursor-pointer" :style="{
      ...widthPx(modWidth), ...heightPx(modWidth), ...leftPx(0), ...bottomPx(0)
    }">
      <RoundedLineSvg class="absolute" :style="{
        ...transformOrigin(modHeight / 2, modHeight / 2), ...rotateDegOnly(coverDeg), ...leftPx(0), ...bottomPx(0)
      }" :width-px="modWidth" :height-px="modHeight" :color="COLOR.LIGHT_PURPLE" />
    </div>

  </div>
</template>
