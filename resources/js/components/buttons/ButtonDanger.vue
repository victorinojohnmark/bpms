<template>
    <button v-bind="$attrs"
    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:shadow focus:shadow transition ease-linear 
    hover:bg-red-500 disabled:bg-red-400 disabled:text-gray-100 disabled:cursor-not-allowed">
    {{ label }}
    </button>
</template>

<script setup>

const props = defineProps({
    label: {
        type: String,
        default: "Button"
    }
    
})
</script>
