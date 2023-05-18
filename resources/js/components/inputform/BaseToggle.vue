<template>
    <!-- <div class="flex flex-col mb-2" :class="class">
        <label class="block text-sm font-semibold leading-6 text-gray-900">{{ label }}</label>
        <div class="mt-2">
            <input 
            v-bind="$attrs"
            :value="modelValue" 
            :placeholder="label"
            @input="$emit('update:modelValue', $event.target.value)"
            class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-1 focus:ring-inset focus:ring-green-600 focus:outline-none focus:shadow-md transition ease-linear text-sm leading-6
                    disabled:cursor-not-allowed disabled:bg-gray-100">
        </div>
    </div> -->

    <div class="flex flex-col items-start justify-center mb-2">
        <label class="block text-sm font-semibold leading-6 text-gray-900">{{ label }}</label>
        <button class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out mt-2"
                :class="{'bg-green-600': modelValue}" role="switch" @click="updateStatus">
            <span class="sr-only">Active</span>
            <span class=" pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition-colors duration-200 ease-in-out"
                :class="{'translate-x-5': modelValue}"></span>
        </button>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Boolean,
        required: true
    },
    class: {
        type: String,
        default: ''
    }
})

const active = ref(null);
const emit = defineEmits(['update:modelValue'])

const updateStatus = () => {
    active.value = !props.modelValue
    emit('update:modelValue', active)
}
</script>