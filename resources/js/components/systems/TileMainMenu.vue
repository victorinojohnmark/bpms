<template>
    <div :id="id" class="group relative bg-white p-6 transition-all ease-linear">
        <div class="group-hover:-mt-px transition-all ease-linear">
            <div>
            <span :class="`inline-flex bg-${color}-50 p-3 text-${color}-700 ring ring-white rounded-lg`">
                <component :is="icon" class="h-6 w-6"></component>
            </span>
        </div>
        <div class="mt-8">
            <h3 class="text-base text-gray-900 font-semibold">
                <router-link :to="link" class="inherit"><span class="absolute inset-0"></span>{{ title }}</router-link>
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ content }}</p>

        </div>
        <span class="absolute pointer-events-none right-5 top-5 text-gray-200 group-hover:text-gray-400 transition-all ease-linear">
            <ArrowUpRightIcon class="h-6 w-6"/>
        </span>
        </div>
    </div>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { reactive, onMounted } from 'vue'


    const props = defineProps({
        id: "",
        link: {
            type: String,
            default: "/"
        },
        title: "",
        content: "",
        icon: null,
        color: {
            type: String, default: "red"
        },
    })
</script>