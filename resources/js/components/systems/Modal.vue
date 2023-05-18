<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="emit('closeModal', false)">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow transition-all ease-linear duration-300 md:my-8 sm:w-full md:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" @click.stop>
            <component v-if="content" :is="content"/>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  content: {
    type: Object,
    default: null
  },

})

const emit = defineEmits(['closeModal'])

</script>