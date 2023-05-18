<template>
    <main class="z-30 bg-white min-h-screen md:min-h-full md:z-0 md:mt-16">
        <div class="flex flex-col gap-y-4 p-4 md:p-8">
            <router-link :to="{ name: 'suppliers' }" class="inline-flex items-center gap-x-2 text-sm font-semibold text-gray-700 hover:text-gray-900"> <ChevronLeftIcon class="w-6 h-6"/> Back</router-link>
            <h1 class=" font-semibold text-lg text-gray-700">{{ supplier.name }}</h1>
            
            <SupplierForm :supplier="supplier.value"/>
        </div>
    </main>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';



import suppliers from '../../../data/suppliers.json'
import useSupplier from '../../../models/SupplierModel'
import SupplierForm from './SupplierForm.vue';

const route = useRoute()
const { supplier, createSupplier, updateSupplier } = useSupplier()


// const supplier = reactive({
//         id: null,
//         name: '',
//         contactPerson: '',
//         emailAddress: '',
//         contactNumber: '',
//         isActive: true
//     })

onMounted(() => {
    if(route.params.id) {

        supplier.value = suppliers.filter(supplier => supplier.id == route.params.id)[0]
        console.log(supplier.value)
        
    }
})



</script>