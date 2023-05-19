<template>
    <main class="z-30 bg-white min-h-screen md:min-h-full md:z-0 md:mt-16">
        <div class="flex flex-col gap-y-4 p-4 md:p-8" v-if="selectedSupplier">
            <div class="inline-flex justify-between">
                <router-link :to="{ name: 'suppliers' }" class="inline-flex items-center gap-x-2 text-sm font-semibold text-gray-700 hover:text-gray-900"><ChevronLeftIcon class="w-6 h-6"/> Back</router-link>
                <button class="inline-flex items-center gap-x-2 text-sm font-semibold text-gray-700 hover:text-gray-900" v-if="!onUpdate" @click="onUpdate = true" > Update</button>
            </div>
            
            
            <h1 class=" font-semibold text-lg text-gray-700">{{ selectedSupplier.name }}</h1>
            <hr>
            <div class="flex flex-col text-sm text-gray-700 gap-y-2" v-if="!onUpdate">
                <div class="flex flex-col md:flex-row">
                    <span class="pr-2">Contact Person: </span>
                    <span class="font-semibold text-gray-900">{{ selectedSupplier.contactPerson }}</span>
                </div>
                <div class="flex flex-col md:flex-row">
                    <span class="pr-2">Contact No.: </span>
                    <span class="font-semibold text-gray-900"><a :href="`tel:${selectedSupplier.contactNumber}`">{{ selectedSupplier.contactNumber }}</a></span>
                </div>
                <div class="flex flex-col md:flex-row">
                    <span class="pr-2">Email: </span>
                    <span class="font-semibold text-gray-900"><a :href="`mailto:${selectedSupplier.email}`">{{ selectedSupplier.email }}</a></span>
                </div>
                <div class="flex flex-col md:flex-row">
                    <span class="pr-2">Status: </span>
                    <span>
                        <span class="whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-600 ring-green-200" :class="{ hidden: !selectedSupplier.isActive }">Active</span>
                        <span class="whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset bg-red-50 text-red-600 ring-red-200" :class="{ hidden: selectedSupplier.isActive }">Inactive</span>
                    </span>
                </div>
            </div>
            <SupplierForm v-if="onUpdate" :supplier="selectedSupplier" @cancel-form="onUpdate = false" @save="saveSupplier(selectedSupplier)"/>
        </div>
    </main>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ChevronLeftIcon, PencilIcon } from '@heroicons/vue/24/outline';
import useSupplier from '../../../composables/useSupplier';
import SupplierForm from './SupplierForm.vue';

const route = useRoute()
const { selectedSupplier, fetchSupplier, saveSupplier } = useSupplier()
const supplier = reactive({})
const onUpdate = ref(false)

onMounted(() => {
    if(route.params.id) {
        fetchSupplier(route.params.id)

        console.log(selectedSupplier)
    }
})



</script>