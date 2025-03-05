<script setup lang="ts">
import { useBooleanState } from "@/assets/states/base"

const props = defineProps<{
  isOpen: boolean,
  message: string
}>();

const reloadPage = () => {
  window.location.reload();
}
</script>


<template>
  <div v-show="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg shadow-xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
      <div class="bg-gradient-to-r from-red-500 to-pink-500 rounded-t-lg px-4 py-4 flex items-center">
        <Icon name="prime:angle-double-right" size="45" class="text-white" />
        <span class="text-3xl font-bold text-white ml-2">ERROR</span>
      </div>
      <div class="px-8 py-20 sm:px-16 sm:py-20 md:px-16 md:py-24 xl:px-24 xl:py-36 text-center text-gray-700">
        {{ message }}
      </div>
      <div class="flex justify-center pb-4">
        <button @click="reloadPage"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-200 ease-in-out">
          リロードする
        </button>
      </div>
    </div>
  </div>
</template>
