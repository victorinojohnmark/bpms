<template>
    <div class="flex flex-col mb-2" :class="class">
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
    </div>
</template>

<script setup>

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    class: {
        type: String,
        default: ''
    }
})
</script>