<script setup lang="ts">
import { getMiddleModSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidSize, getLiquidTop } from "assets/ts/parts/liquid"

const props = defineProps<{
    baseSize: number,
    liquidRate: number,
    state: string
}>();

const {
    height: modHeight, width: modWidth,
    innerHeight: modInnerHeight, innerWidth: modInnerWidth,
    innerTop: modInnerTop, innerLeft: modInnerLeft
} = getMiddleModSize(props.baseSize)

// liquid 
const liquidHeight = computed<number>(() => {
    return getLiquidSize(modInnerHeight, props.liquidRate)
})
const liquidTop = computed<number>(() => {
    return getLiquidTop(modInnerTop, liquidHeight.value, modInnerHeight)
})
</script>

<template>
    <div class="relative" :style="{
        ...heightPx(modHeight), ...widthPx(modWidth)
    }">
        <!-- liquid  -->
        <div class="comp-default bg-dark-purple" :style="{
            ...heightPx(liquidHeight), ...widthPx(modInnerWidth),
            ...topPx(liquidTop), ...leftPx(modInnerLeft)
        }"></div>

        <!-- container  -->
        <img class="comp-default" :style="{
            ...heightPx(modHeight)
        }" src="@/assets/img/parts/middle.png" alt="" />
    </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
