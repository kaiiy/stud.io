<script setup lang="ts">
import { getMiddleModSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx, toPx } from "assets/ts/style/to-px"
import { baseLeftPx, baseTopPx } from "@/assets/ts/parts/middle/noodle"
import { getLiquidSize, getLiquidTop } from "assets/ts/parts/liquid"
import { COLOR } from "@/assets/ts/style/color"
import { STATE } from "@/assets/ts/main/state"
import Noodles from "./middle/noodles.vue"
import Container from "./middle/container.vue"

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

// cup 
const showCupComponents = computed(() => props.state === STATE.MIDDLE.CUP)
</script>

<template>
    <div class="relative overflow-hidden" :style="{
        ...heightPx(modHeight), ...widthPx(modWidth)
    }">
        <!-- liquid  -->
        <div class="comp-default bg-dark-purple" :style="{
            ...heightPx(liquidHeight), ...widthPx(modInnerWidth),
            ...topPx(liquidTop), ...leftPx(modInnerLeft)
        }"></div>

        <!-- noodles (cup) -->
        <Noodles v-show="showCupComponents" :base-size="baseSize" />

        <!-- container  -->
        <Container class="comp-default" :style="{
            ...heightPx(modHeight), ...widthPx(modWidth)
        }" :color="COLOR.LIGHT_PURPLE" />

        <!-- liquid line (cup)  -->
        <svg v-show="showCupComponents" :style="{
            strokeWidth: toPx(baseSize * 0.03),
            ...baseTopPx(0.68, baseSize)
        }" class="absolute" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100" y2="0" :stroke="COLOR.LIGHT_PURPLE" />
        </svg>
    </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
