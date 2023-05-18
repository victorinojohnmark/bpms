<template>
    <button 
    :type="buttonType" :disabled="disabled"
    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:shadow focus:shadow transition ease-linear 
    hover:bg-red-500 disabled:bg-red-400 disabled:text-gray-100 disabled:cursor-not-allowed">
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
