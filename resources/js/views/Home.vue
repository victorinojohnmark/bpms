<template>
    <main class="flex flex-col items-center mt-16">
        <div class="w-2/3 my-20">
            <div class=" grid sm:grid-cols-2 sm:gap-px overflow-hidden rounded-lg shadow bg-gray-200">
                <TileMainMenu id="masterRecord" title="Master Record" link="/masterrecords" content="Suppliers, Contractors, Sales Manager and Brokers" :icon="ClipboardDocumentCheckIcon" color="teal" />
                <TileMainMenu id="location" title="Locations" link="/" content="Location/Project Sites and Blocks" :icon="MapPinIcon" color="orange" />
                <!-- <TileMainMenu id="location" title="Locations" link="/locations" content="Location/Project Sites and Blocks" :icon="MapPinIcon" themeColor="orange" /> -->
            </div>
        </div>
        
    </main>
</template>

<script setup>
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'
import { MapPinIcon } from '@heroicons/vue/24/outline'


import TileMainMenu from '../components/systems/TileMainMenu.vue'

console.log("Home page")
</script>