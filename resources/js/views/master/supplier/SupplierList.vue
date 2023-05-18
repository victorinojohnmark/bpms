<template>
    <main class="mt-16">
        <div class="flex flex-col rounded-xl w-full mx-auto my-0 bg-white px-4 md:px-8">
            <div class="flex flex-col gap-y-4">
                <div class="flex items-center justify-between bg-white pt-4 md:pt-8">
                    <button class="inline-flex items-center gap-x-2 text-sm font-semibold text-gray-700 hover:text-gray-900" @click="toggleCreateModal"><PlusCircleIcon class="w-6 h-6"/>Create</button>
                    <button class="inline-flex items-center gap-x-2 text-sm font-semibold text-gray-700 hover:text-gray-900"><MagnifyingGlassIcon class="w-6 h-6"/>Search</button>
                </div>

                <ul role="list" class="divide-y divide-gray-100 h-minus-250px md:h-minus-300px overflow-y-auto">
                    
                    <li v-for="(supplier, index) in suppliers.data">
                        <router-link :to="{name: 'suppliershow', params: { id: supplier.id }}">
                            <div class="flex justify-between gap-x-6 py-5 group hover:bg-gray-50 px-4 transition-all ease-linear">   
                                <div class="min-w-0 flex-auto">
                                    <div class="flex items-center">
                                        <p class="text-sm font-semibold leading-6 text-gray-700 group-hover:text-gray-950">
                                            <span class="mr-2">{{ supplier.name }}</span>
                                            <span class="whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-600 ring-green-200" :class="{ hidden: !supplier.isActive }">Active</span>
                                            <span class="whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset bg-red-50 text-red-600 ring-red-200" :class="{ hidden: supplier.isActive }">Inactive</span>
                                        </p> 
                                        
                                    </div>
                                    <p class="mt-1 text-ellipsis text-xs leading-5 text-gray-500">{{ supplier.contactPerson }} • {{ supplier.email }} / {{ supplier.contactNumber }}</p>
                                </div>
                                
                                <div class="flex items-center text-gray-200 group-hover:text-gray-400 transition-all ease-linear">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                
                <div class="flex items-center justify-between border-t border-gray-200 bg-white py-4 sm:py-8 mt-auto">
                    <div class="flex flex-1 justify-between md:hidden">
                        <div>
                            <ButtonDefault button-name="Export List"/>
                        </div>
                        <TailwindPagination :data="suppliers" @pagination-change-page="getSupplierList" :limit="-1"
                            :item-classes="['border-0 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0']"
                            :active-classes="['z-10 bg-green-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600']"/>
                    </div>
                    <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
                        <div class="inline-flex items-center gap-x-2">
                            <ButtonDefault button-name="Export List"/>
                            <div>
                                <p class="text-sm text-gray-700" v-if="suppliers.meta">Showing 
                                    <span class="font-medium"> {{ suppliers.meta.current_page }} </span> to 
                                    <span class="font-medium"> {{ suppliers.meta.last_page }} </span> of 
                                    <span class="font-medium"> {{ suppliers.meta.total }} </span> results
                                </p>
                            </div>
                        </div>
                        <div>

                            <TailwindPagination :data="suppliers" @pagination-change-page="getSupplierList" :limit="4"
                            :item-classes="['border-0 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0']"
                            :active-classes="['z-10 bg-green-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600']"/>
                        </div>
                    </div>
                </div>
            </div>  
            
            <Modal v-if="showCreateModal" @closeModal="toggleCreateModal">
                <h3>Hi, this is modal content.</h3>

                <SupplierForm :data="null"/> 
            </Modal>
            <!-- FIX supplier form bug, looking for data.values -->

        </div>

    </main>
</template>

<script setup>
import ButtonDefault from '../../../components/buttons/ButtonDefault.vue';
import Modal from '../../../components/systems/Modal.vue';
import { ChevronRightIcon, ChevronLeftIcon, MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from 'vue'
import useSupplier from '../../../composables/useSupplier'
import SupplierForm from './SupplierForm.vue';
import { TailwindPagination } from 'laravel-vue-pagination';


const showCreateModal = ref(false)
const { suppliers, fetchSuppliers } = useSupplier()
const filterParam = ref('')


const toggleCreateModal = () => {
    showCreateModal.value = !showCreateModal.value
}

const getSupplierList = async (page = 1) => {
    filterParam.value = 
    await fetchSuppliers(`${filterParam.value ? filterParam.value + '&' : ''}page=${page}`)
}

onMounted(() => {
    getSupplierList()
    console.log(suppliers.value)
})


</script>