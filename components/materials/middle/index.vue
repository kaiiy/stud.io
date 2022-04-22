<script setup lang="ts">
import { getMiddleModSize } from "assets/ts/materials/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidHeight, getLiquidTop } from "assets/ts/materials/middle/liquid"

type Props = {
    baseSize: number,
    liquidRate: number
};
const props = defineProps<Props>();

// get size
const {
    height: modHeight,
    innerHeight: modInnerHeight, innerWidth: modInnerWidth,
    innerTop: modInnerTop, innerLeft: modInnerLeft
} = getMiddleModSize(props.baseSize)

// liquid 
const liquidHeight = getLiquidHeight(modInnerHeight, props.liquidRate)
const liquidTop = getLiquidTop(modInnerTop, liquidHeight, modInnerHeight)
</script>

<template>
    <div class="relative">

        <!-- container  -->
        <img class="absolute object-contain z-20" :style="{
            ...heightPx(modHeight)
        }" src="@/assets/img/materials/middle.png" alt="" />

        <!-- liquid  -->
        <div class="absolute bg-dark-purple z-10" :style="{
            ...heightPx(liquidHeight), ...widthPx(modInnerWidth),
            ...topPx(liquidTop), ...leftPx(modInnerLeft)
        }">
        </div>
    </div>
</template>