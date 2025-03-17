<script setup lang="ts">
// Vue Components
import MiddleMod from "@/components/module/middle-mod.vue";
import CircleMod from "@/components/module/circle-mod.vue";
import LongMod from "@/components/module/long-mod.vue";
import CircleBtn from "@/components/module/next/circle-btn.vue";
import LongBtn from "@/components/module/next/long-btn.vue";
import MiddleBtn from "@/components/module/next/middle-btn.vue";
import ModuleContainer from "@/components/main/module-container.vue";
import SwitchBtn from "@/components/module/switch-btn.vue";
import CoverMod from "@/components/module/cover-mod.vue";
import MiddleWrapper from "@/components/module/middle-wrapper.vue";

import InfoDialog from "@/components/main/info-dialog.vue";

// Variables & Functions
import {
  circleStateIdx,
  currentCircleState,
  setNextCircleIdx,
  circleInitTimeSec,
  circlePotRad,
  circleRemainingTimeRate,
  updateCircleInitTimeSec,
  updateCirclePotRad,
  updateCircleRemainingTimeRate,
} from "@/assets/ts/parts/circle/variables";
import {
  switchState,
  updateSwitchState,
} from "@/assets/ts/parts/switch/variables";

// The Others
import { STATE, getCurrentLongState } from "@/assets/ts/main/state";
import { potFillRate, cupFillRate } from "@/assets/ts/main/water";
import { convertRad2Deg } from "@/assets/ts/math/angle";
import { useNumberState, useBooleanState } from "~/assets/ts/states/base";
import {
  useMiddleStateIdx,
  useCurrentLongTypeIdx,
} from "~/assets/ts/states/state-idx";

// ======== config ========
// 描画サイズ単位
const baseSize = 100; // todo
// 描画フレーム間隔
const intervalMsec = 1000; // todo

// ======== state and state-handler ========
const [middleStateIdx, setNextMiddleIdx, currentMiddleState] =
  useMiddleStateIdx(0);
const [currentLongTypeIdx, setNextLongType] = useCurrentLongTypeIdx(0);

const currentLongState = computed(() =>
  getCurrentLongState(
    currentLongTypeIdx.value,
    circleStateIdx.value,
    middleStateIdx.value
  )
);

// ゲームエラー
const gameErr = ref("None");
const throwGameErr = (msg: string) => {
  gameErr.value = msg;
};
// ダイアログ
const [isOpenDialog, setIsOpenDialog] = useBooleanState(false);
const message = ref("");
const openDialog = (newMessage: string) => {
  message.value = newMessage;
  setIsOpenDialog(true);
};

// Middle
const [potWater, updatePotWater] = useNumberState(0);
const potRate = computed<number>(() => {
  const _rate = potFillRate(potWater.value);
  if (_rate >= 1) {
    throwGameErr("ポットの容量オーバー");
    openDialog("床が水浸しになってしまいました。最初からやり直してください。");
  }
  return _rate;
});
const [potCoverDeg] = useNumberState(0);
const [cupCoverDeg] = useNumberState(0);

const [cupWater, updateCupWater] = useNumberState(0);
const cupRate = computed<number>(() => cupFillRate(cupWater.value));

const middleRate = computed(() => {
  const state = currentMiddleState.value;
  if (state === STATE.MIDDLE.POT) return potRate.value;
  else if (state === STATE.MIDDLE.CUP) return cupRate.value;
  else throw new Error("middleRate: invalid state");
});
const coverDeg = computed(() => {
  const state = currentMiddleState.value;
  if (state === STATE.MIDDLE.POT) return potCoverDeg.value;
  else if (state === STATE.MIDDLE.CUP) return cupCoverDeg.value;
  else throw new Error("CoverDeg: invalid state");
});
const updateCoverDeg = (newDeg: number) => {
  const state = currentMiddleState.value;
  if (state === STATE.MIDDLE.POT) potCoverDeg.value = newDeg;
  else if (state === STATE.MIDDLE.CUP) cupCoverDeg.value = newDeg;
  else throw new Error("updateCoverDeg: invalid state");
};

// water temperature
const WATER_INIT_TEMPERATURE = 20;
const MAX_TEMPERATURE = 100;

const [potTemperature, updatePotTemperature] = useNumberState(
  WATER_INIT_TEMPERATURE
);
const [cupTemperature, updateCupTemperature] = useNumberState(
  WATER_INIT_TEMPERATURE
);

// waterVol: 今入れようとしている水の量
const addWaterIntoPot = (waterVol: number) => {
  if (potCoverDeg.value > -45 && waterVol > 0) {
    throwGameErr("フタが空いていないため、水がこぼれた");
    openDialog("床が水浸しになってしまいました。最初からやり直してください。");
    return;
  }
  updatePotWater(potWater.value + waterVol);
  // 温度変化の実装
  updatePotTemperature(
    (waterVol * WATER_INIT_TEMPERATURE +
      potTemperature.value * potWater.value) /
      (potWater.value + waterVol)
  );
};

const addPotWaterIntoCup = (waterMl: number) => {
  if (cupCoverDeg.value > -45 && waterMl > 0) {
    throwGameErr("カップのフタが空いていない");
    openDialog("床が水浸しになってしまいました。最初からやり直してください。");
    return;
  }
  // ポットのフタが空いてない
  if (potCoverDeg.value === 0) {
    return;
  }

  updatePotWater(potWater.value - waterMl);
  updateCupWater(cupWater.value + waterMl);
  updateCupTemperature(
    (waterMl * potTemperature.value + cupWater.value * cupTemperature.value) /
      (waterMl + cupWater.value)
  );
};

// long
const longVal = computed(() => {
  let liquidRate = 0,
    maxNum = 0,
    minNum = 0;

  const currentState = currentLongState.value;

  // valve: water temperature (circle)
  if (currentState === STATE.CIRCLE.VALVE) {
    maxNum = MAX_TEMPERATURE;
    minNum = 0;
    liquidRate = WATER_INIT_TEMPERATURE / (maxNum - minNum);
  }
  // time: remaining time rate (circle)
  else if (currentState === STATE.CIRCLE.TIME) {
    maxNum = circleInitTimeSec.value;
    minNum = 0;
    liquidRate = circleRemainingTimeRate.value;
  }
  // pot: degree (circle)
  else if (currentState === STATE.CIRCLE.POT) {
    maxNum = 90;
    minNum = 0;
    liquidRate = convertRad2Deg(circlePotRad.value) / (maxNum - minNum);
  }
  // pot: temperature (middle)
  else if (currentState === STATE.MIDDLE.POT) {
    maxNum = MAX_TEMPERATURE;
    minNum = 0;
    liquidRate = potTemperature.value / (maxNum - minNum);
  }
  // cup: temperature (middle)
  else if (currentState === STATE.MIDDLE.CUP) {
    maxNum = MAX_TEMPERATURE;
    minNum = 0;
    // TODO: 温度変化
    liquidRate = cupTemperature.value / (maxNum - minNum);
  } else throw new Error("longVal: invalid state");

  console.assert(liquidRate >= 0 && liquidRate <= 1, "liquidRate is invalid");
  return { liquidRate, maxNum, minNum };
});

const updateCirclePotRadWithSwitch = (newRad: number) => {
  updateCirclePotRad(newRad);
  if (newRad > 0) {
    window.clearInterval(raiseTemperatureTimer);
    updateSwitchState(STATE.SWITCH.OFF);
  }
};

let raiseTemperatureTimer: number;

const raiseTemperature = () => {
  // 空焚き
  if (potWater.value <= 0) {
    throwGameErr("空焚き");
    openDialog("空焚きは危険です。最初からやり直してください。");
  }
  // 沸騰100度で2分間(最大容量の場合)で沸騰させる
  updatePotTemperature(
    potTemperature.value +
      ((MAX_TEMPERATURE - WATER_INIT_TEMPERATURE) * intervalMsec) /
        (2 * potRate.value * 60 * 1000)
  );
  // 100度を超えたら100度に固定
  if (potTemperature.value >= MAX_TEMPERATURE) {
    updatePotTemperature(MAX_TEMPERATURE);
  }
};

const toggleSwitchState = () => {
  // スイッチオン
  if (switchState.value === STATE.SWITCH.OFF) {
    updateSwitchState(STATE.SWITCH.ON);
    raiseTemperatureTimer = window.setInterval(raiseTemperature, intervalMsec);
  }
  // スイッチオフ
  else if (switchState.value === STATE.SWITCH.ON) {
    window.clearInterval(raiseTemperatureTimer);
    updateSwitchState(STATE.SWITCH.OFF);
  } else throw new Error("toggleSwitchState: invalid state");
};
</script>

<template>
  <InfoDialog :isOpen="isOpenDialog" :message="message" />

  <!-- TODO: marginTop  -->
  <div class="flex">
    <div class="w-1/2">
      <ModuleContainer
        :base-size="baseSize"
        :style="{
          marginTop: String(baseSize * 2.5) + 'px',
        }"
      >
        <!-- circle module  -->
        <CircleMod
          :state="currentCircleState"
          :interval-msec="intervalMsec"
          :pot-rad="circlePotRad"
          :base-size="baseSize"
          :handle-add-water-into-pot="addWaterIntoPot"
          :handle-update-pot-rad="updateCirclePotRadWithSwitch"
          :handle-update-remaining-time-rate="updateCircleRemainingTimeRate"
          :handle-update-init-time-sec="updateCircleInitTimeSec"
          :handle-add-pot-water-into-cup="addPotWaterIntoCup"
        />

        <!-- middle module  -->
        <MiddleWrapper>
          <CoverMod
            :deg="coverDeg"
            :update-deg="updateCoverDeg"
            :base-size="baseSize"
          />
          <MiddleMod
            :state="currentMiddleState"
            :liquid-rate="middleRate"
            :base-size="baseSize"
          />
        </MiddleWrapper>

        <!-- next module  -->
        <CircleBtn
          :state-idx="circleStateIdx"
          :handle-click="setNextCircleIdx"
          :base-size="baseSize"
        />
        <LongBtn
          :type-idx="currentLongTypeIdx"
          :base-size="baseSize"
          :handle-click="setNextLongType"
        />
        <MiddleBtn
          :state-idx="middleStateIdx"
          :base-size="baseSize"
          :handle-click="setNextMiddleIdx"
        />

        <!-- long module  -->
        <LongMod
          :liquid-rate="longVal.liquidRate"
          :max-num="longVal.maxNum"
          :min-mum="longVal.minNum"
          :base-size="baseSize"
        />

        <!-- switch  -->
        <SwitchBtn
          :state="switchState"
          :handle-click="toggleSwitchState"
          :base-size="baseSize"
        />
      </ModuleContainer>
    </div>
    <div class="w-1/2">
      <div>========</div>
      <div>DEBUG</div>
      <div>{{ potCoverDeg }}</div>
      <div>========</div>
      <div>ERR: {{ gameErr }}</div>
    </div>
  </div>
</template>
