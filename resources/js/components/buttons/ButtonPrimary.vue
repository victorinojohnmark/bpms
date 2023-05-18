<template>
    <button v-bind="$attrs" 
    class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:shadow focus:shadow transition ease-linear
    hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
    disabled:bg-blue-400 disabled:text-gray-600 disabled:cursor-not-allowed">
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
