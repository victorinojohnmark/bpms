<template>
<div class=" p-4 bg-green-100 rounded-md">
    <div class="flex">
        <div class="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-green-400">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="ml-3">
            <h3 v-if="title.trim().length !== 0" class=" text-sm font-medium text-green-800 mb-1">{{ title }}</h3>
            <p v-if="text.trim().length !== 0" class="text-sm text-green-600">{{ text }}</p>
            <ul v-if="textLists.length > 1" role="list" class=" list-disc pl-5 text-sm text-green-600">
                <li v-for="textList in textLists">{{ textList }}</li>
            </ul>
        </div>
        <div class="ml-auto pl-3">
            
            <div class="-m-1.5">
                <button type="button" @click="emit('closeAlert')" class="inline-flex rounded-md bg-green-100 p-1.5 text-green-400">
                    <span class="sr-only">Dismiss</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ""
        },
        textLists: {
            type: Array,
            default: []
        }
    })

    const emit = defineEmits(['closeAlert'])
</script>