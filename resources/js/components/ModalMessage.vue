<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ease-linear duration-300 sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <component v-if="icon" :is="icon" />
              <div class="flex flex-col w-full">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{ title }}</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-600"><slot></slot></p>
                  </div>
                </div>

                <div class="bg-gray-50 px-4 py-3 text-right flex flex-row md:flex-col md:items-end sm:px-6">
                  <!-- <button 
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Hide</button> -->
                  <button type="button" @click="emit('closeModal')"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// import { defineProps, defineEmits } from 'vue';
import DangerRoundedIcon from './icons/DangerRoundedIcon.vue';
import SuccessRoundedIcon from './icons/SuccessRoundedIcon.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  icon: {
    type: Object,
    default: DangerRoundedIcon
  },
  isVisible: {
    type: Boolean,
    default: false
  }

})

const emit = defineEmits(['closeModal'])

</script>