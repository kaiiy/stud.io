<script setup lang="ts">
import { useBooleanState } from "@/assets/states/base"

const props = defineProps<{
  isOpen: boolean,
  closeDialog: () => void,
}>();


</script>


<template>
  <div v-show="isOpen"
    class="bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed shadow-lg rounded-lg z-50 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] ">
    <div>
      <button @onClick="closeDialog()" class="absolute right-4 top-4">
        <IoMdClose class="w-10 h-10" />
      </button>
    </div>
    <div class="flex items-center pl-4 pt-4">
      <MdOutlineKeyboardDoubleArrowRight size={45} class="inline-block align-middle" />
      <span class="text-3xl ml-2">ERROR</span>
    </div>
    <div>
      <div
        class="flex justify-center items-center w-full h-full px-8 py-20 sm:px-16 sm:py-20 md:px-16 md:py-24 xl:px-24 xl:py-36">
        床が水浸しになっています。最初からやり直してください。
      </div>
    </div>
  </div>

</template>
