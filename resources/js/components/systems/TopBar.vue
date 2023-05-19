<template>
    <nav class="bg-gray-800 fixed w-full z-10">
        <div class="px-4 sm:px-6">
          <div class="flex h-16 items-center">
            <div class="flex items-center">
              <div class="flex flex-row items-center font-bold text-xl gap-x-2 ">
                <img class="h-8 w-8" src="/img/icon-leaf.png" alt="Your Company">
                <h1 class="text-green-700">BPMS</h1>
              </div>
            </div>
            <div class="hidden md:block md:flex-1" v-if="nav.topBarMenus && auth.user">
              <div class="flex items-baseline space-x-4 ml-3">
                <h3 class="text-white px-3 py-2 text-sm font-medium md:border-r-2 md:border-gray-600">{{ nav.topBarTitle }}</h3>
                <router-link :to="{name: link.name}" v-for="(link, index) in nav.topBarMenus" 
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition ease-linear"
                :class="{'bg-gray-900': $route.path === link.path && $route.name === link.name}">
                  {{ link.title }}
                </router-link>
              </div>
            </div>
            <div class="hidden md:block" v-if="auth.user">
              <div class="ml-4 flex items-center md:ml-6">
                <router-link :to="{name: 'Home'}" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                    <span class="sr-only">View Home</span>
                    <HomeIcon class="h-6 w-6" />
                </router-link>
  
                <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6"/>
                </button>
  
                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div>
                    <button type="button" @click="showUserMenu = !showUserMenu" @focusout="showUserMenu = !showUserMenu" class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" src="/img/tim-cook.jpeg" alt="">
                    </button>
                  </div>
                  <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" :class="{ 'hidden': !showUserMenu  }" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" @click.prevent="logout" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-auto flex md:hidden" v-if="auth.user">
              <!-- Mobile menu button -->
              <button type="button" @click="showMobileMenu = !showMobileMenu" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <Bars3BottomRightIcon class="h-6 w-6"/>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Mobile menu, show/hide based on menu state. -->
        <div id="mobile-menu" class="md:hidden transition-all ease-linear h-minus-64px overflow-y-auto" :class="{'!hidden' : !showMobileMenu}">
          <div class="border-t border-gray-700 pb-3 pt-4" v-if="auth.user">
            <div class="space-y-1 px-2 mb-3 bt">
              <router-link v-if="$route.name != 'Home'" :to="{ name: 'Home' }" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white transition ease-linear" @click="showMobileMenu = false">
                  Home
              </router-link>
              <h3 class="block text-white px-3 py-2 text-sm font-medium">{{ nav.topBarTitle }}</h3>
              <router-link :to="{name: link.name}" v-for="(link, index) in nav.topBarMenus" 
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white transition ease-linear"
                :class="{'bg-gray-900': $route.path === link.path && $route.name === link.name}" @click="showMobileMenu = false">
                  {{ link.title }}
              </router-link>
              
              <!-- <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
              <a href="#" @click.prevent="logout" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a> -->
              <br>
              <hr class="pb-4">
            </div>
            
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="/img/tim-cook.jpeg" alt="">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
              </div>
              <button type="button"  class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6"/>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2" @click="showUserMenu = false">
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
              <a href="#" @click.prevent="logout" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
            </div>
          </div>
        </div>
      </nav>
</template>

<script setup>
import {HomeIcon, BellIcon, Bars3Icon, Bars3BottomRightIcon} from '@heroicons/vue/24/outline'
import { ref, watch, onMounted } from 'vue'
import { useNavStore } from '../../stores/useNavStore'
import { useAuthStore } from '../../stores/useAuthStore'
import router from '../../router';


const auth = useAuthStore()

const showMobileMenu = ref(false);
const showUserMenu = ref(false);

const nav = useNavStore()
const topBarMenus = ref([])

watch(nav.$state.topBarMenus, (newValue) => {
  topBarMenus.value = newValue
})

const logout = () => {
  auth.logout()
  showUserMenu.value = false
  router.push('/login')
}

onMounted(() => {
    // console.log(auth.user)
    // console.log(nav.topBarTitle, nav.topBarMenus)
})

</script>
