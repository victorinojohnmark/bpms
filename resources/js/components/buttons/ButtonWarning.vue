<template>
    <button 
    :type="buttonType" :disabled="disabled"
    class="inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-gray-900 hover:shadow focus:shadow transition ease-linear 
    hover:bg-amber-400 disabled:bg-amber-300 disabled:text-gray-100 disabled:cursor-not-allowed">
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
