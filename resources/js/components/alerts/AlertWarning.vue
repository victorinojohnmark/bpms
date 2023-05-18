<template>
<div class=" p-4 bg-amber-100 rounded-md">
    <div class="flex">
        <div class="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-amber-400">
                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="ml-3">
            <h3 v-if="title.trim().length !== 0" class=" text-sm font-medium text-amber-800 mb-1">{{ title }}</h3>
            <p v-if="text.trim().length !== 0" class="text-sm text-amber-700">{{ text }}</p>
            <ul v-if="textLists.length > 1" role="list" class=" list-disc pl-5 text-sm text-amber-700">
                <li v-for="textList in textLists">{{ textList }}</li>
            </ul>
        </div>
        <div class="ml-auto pl-3">
            
            <div class="-m-1.5">
                <button type="button" @click="emit('closeAlert')" class="inline-flex rounded-md bg-amber-100 p-1.5 text-amber-400">
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