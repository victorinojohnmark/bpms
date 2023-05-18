<template>
    <div class="min-h-screen bg-gray-100">
      <TopBar></TopBar>
      <div id="mainWrapper" class="flex flex-col">
        <router-view v-slot="{ Component }">
          <!-- <transition 
          enter-active-class="animate__animated animate__fadeInRight animate__faster" 
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"  
          mode="out-in"> -->
            <component :is="Component"/>
          <!-- </transition> -->
        </router-view>
        <footer class="flex-shrink-0">
            <div class="p-4 sm:px-8 text-xs font-semibold text-gray-400 text-center md:text-left">
              <span>©2023 BPMS • Z-Well IT Department</span>
            </div>
        </footer>
      </div>
    </div>
    
</template>

<script setup>
import TopBar from './components/systems/TopBar.vue'
import router from './router';
import { useAuthStore } from './stores/useAuthStore'
import { watch } from 'vue'

const auth = useAuthStore()
auth.initialize()

// watch(auth.$state.isAuthenticated, (newValue) => {
//   topBarMenus.value = newValue
//   if(newValue == false) {
//     router.push("/login")
//   }
// })

</script>