<script setup lang="ts">
import { getMiddleModSize, getNoodleSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidSize, getLiquidTop } from "assets/ts/parts/liquid"
import { COLOR } from "@/assets/ts/style/color"
import NoodleSvg from "../shapes/noodle-svg.vue"

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

const {
    height: noodleHeight, width: NoodleWidth
} = getNoodleSize(props.baseSize)

// liquid 
const liquidHeight = computed<number>(() => {
    return getLiquidSize(modInnerHeight, props.liquidRate)
})
const liquidTop = computed<number>(() => {
    return getLiquidTop(modInnerTop, liquidHeight.value, modInnerHeight)
})
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

        <NoodleSvg class="absolute" :style="{
            top: '50px', ...heightPx(noodleHeight), ...widthPx(NoodleWidth)
        }" :color="COLOR.LIGHT_PURPLE" />

        <!-- container  -->
        <svg class="comp-default" :style="{
            ...heightPx(modHeight), ...widthPx(modWidth)
        }" version="1.1" viewBox="0 0 55.563 108.48" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-87.312 -5.2917)">
                <path
                    d="m89.334 5.2917c-1.1196 0-2.0211 0.85955-2.0211 1.9271v104.63c0 1.0675 0.90148 1.9271 2.0211 1.9271h51.52c1.1196 0 2.0211-0.85955 2.0211-1.9271v-104.63c0-1.0675-0.90149-1.9271-2.0211-1.9271zm25.76 8.8297c5.1303 0 9.2604 3.938 9.2604 8.8297v73.16c0 4.8917-4.1302 8.8297-9.2604 8.8297-5.1303 0-9.2604-3.938-9.2604-8.8297v-73.16c0-4.8917 4.1301-8.8297 9.2604-8.8297z"
                    :fill="COLOR.LIGHT_PURPLE" stroke-linecap="round" stroke-width="1.2878" />
            </g>
        </svg>

    </div>
</template>

<style src="@/assets/css/component.css" scoped>
</style>
