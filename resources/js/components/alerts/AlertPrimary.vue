<template>
<div class=" p-4 bg-blue-100 rounded-md">
    <div class="flex">
        <div class="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-blue-400">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="ml-3">
            <h3 v-if="title.trim().length !== 0" class=" text-sm font-medium text-blue-800 mb-1">{{ title }}</h3>
            <p v-if="text.trim().length !== 0" class="text-sm text-blue-600">{{ text }}</p>
            <ul v-if="textLists.length > 1" role="list" class=" list-disc pl-5 text-sm text-blue-600">
                <li v-for="textList in textLists">{{ textList }}</li>
            </ul>
        </div>
        <div class="ml-auto pl-3">
            
            <div class="-m-1.5">
                <button type="button" @click="emit('closeAlert')" class="inline-flex rounded-md bg-blue-100 p-1.5 text-blue-400">
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