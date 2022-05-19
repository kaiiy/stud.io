<script setup lang="ts">
import { getMiddleModSize } from "assets/ts/parts/get-size"
import { heightPx, widthPx, leftPx, topPx } from "assets/ts/style/to-px"
import { getLiquidSize, getLiquidTop } from "assets/ts/parts/liquid"

type Props = {
    baseSize: number,
    liquidRate: number
};
const props = defineProps<Props>();

// get size
const {
    height: modHeight, width: modWidth,
    innerHeight: modInnerHeight, innerWidth: modInnerWidth,
    innerTop: modInnerTop, innerLeft: modInnerLeft
} = getMiddleModSize(props.baseSize)

// liquid 
const liquidHeight = getLiquidSize(modInnerHeight, props.liquidRate)
const liquidTop = getLiquidTop(modInnerTop, liquidHeight, modInnerHeight)
</script>

<template>
    <div class="relative col-span-2 row-span-4" :style="{
        ...heightPx(modHeight), ...widthPx(modWidth)
    }">
        <!-- container  -->
        <img class="comp-default z-20" :style="{
            ...heightPx(modHeight)
        }" src="@/assets/img/parts/middle.png" alt="" />

        <!-- liquid  -->
        <div class="comp-default bg-dark-purple z-10" :style="{
            ...heightPx(liquidHeight), ...widthPx(modInnerWidth),
            ...topPx(liquidTop), ...leftPx(modInnerLeft)
        }">
        </div>
    </div>
</template>
