<template>
    <div class="flex flex-col mb-2" :class="class">
        <label class="block text-sm font-semibold leading-6 text-gray-900">{{ label }}</label>
        <div class="mt-2">
            <input 
            :type="type" 
            :required="required" 
            :value="modelValue" 
            :class="inputClass"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            @input="$emit('update:modelValue', $event.target.value)"
            autocomplete="false" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                        focus:ring-1 focus:ring-inset focus:ring-green-600 focus:outline-none focus:shadow-md transition ease-linear sm:text-sm sm:leading-6
                                         disabled:cursor-not-allowed disabled:bg-gray-100">
        </div>
    </div>
</template>

<script setup>
// import { defineProps } from 'vue';
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "text"
    },
    modelValue: {
        type: String,
        default: ""
    },
    required: {
        type: Boolean,
        default: false
    },
    class: {
        type: String,
        default: ""
    },
    inputClass: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    }

})

</script>