<template>
    <button 
    :type="buttonType" :disabled="disabled"
    class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:shadow-sm focus:shadow-sm ring-1 
    ring-inset ring-gray-300 transition ease-linear hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:cursor-not-allowed
    disabled:bg-gray-200 disabled:text-gray-400">
    {{ buttonName }}
    </button>
</template>

<script setup>

const props = defineProps({
    buttonType: {
        type: String,
        default: "button"
    },
    buttonName: {
        type: String,
        default: "Button"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    
})
</script>
