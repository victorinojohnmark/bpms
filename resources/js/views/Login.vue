<template>
    <main class="flex flex-row min-h-screen mt-16">
        <div class="flex flex-col w-full mt-16 md:mt-4 md:w-2/3 lg:w-1/2 xl:w-2/6 p-6 md:p-24 bg-white shadow-md">
            <div class="flex flex-col">
                <div class="flex flex-col items-center md:items-start sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="flex flex-row items-center gap-x-1">
                        <img class="h-16 w-16" src="/img/icon-leaf.png" alt="Your Company">
                        <h1 class="text-green-900 font-bold text-4xl">BPMS</h1>
                    </div>
                    <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">Log in to your account</h2>
                </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" @submit.prevent="handleSubmitForm">
                    <Input v-model="loginData.email" label="Email Address" type="email" placeholder="user@email.com" required/>
                    <Input v-model="loginData.password" label="Password" type="password" required/>

                    <div class="flex gap-x-3 items-center">
                        <div>
                            <ButtonPrimary label="Log in"/>
                        </div>
                        <div class="text-sm text-right">
                            <a href="#" class="font-semibold text-green-600 hover:text-green-500">Forgot password?</a>
                        </div>
                    </div>
                    <Transition>
                        <AlertDanger v-if="authErrorAlert.isVisible" :title="authErrorAlert.title" :text="authErrorAlert.text" 
                        @closeAlert="authErrorAlert.isVisible = false"/>
                    </Transition>
                    
                </form>
            </div>
            </div>

            
        </div>
        <div class="w-full bg-green-900 hidden md:block md:w-1/3 lg:w-1/2 xl:w-4/6 bg-[url('/img/river.jpg')] bg-cover bg-right-top"></div>

    </main>

    <Transition>
        <ModalMessage v-if="modalMessage.isVisible" :title="modalMessage.title" @closeModal="modalMessage.isVisible = false" :icon="successIconRounded">
            {{ modalMessage.text }}
        </ModalMessage>
    </Transition>
</template>

<script setup>
import { onMounted, defineComponent, reactive } from 'vue'
import { useNavStore } from '../stores/useNavStore'
import { useAuthStore } from '../stores/useAuthStore'
import router from '../router'
import { ApiClient } from '../helpers'

import ModalMessage from '../components/ModalMessage.vue'
import SuccessRoundedIcon from '../components/icons/SuccessRoundedIcon.vue'
import Input from '../components/inputform/Input.vue'
import ButtonPrimary from '../components/buttons/ButtonPrimary.vue'
import AlertDanger from '../components/alerts/AlertDanger.vue'
import AlertPrimary from '../components/alerts/AlertPrimary.vue'

const api = new ApiClient
const authStore = useAuthStore()

// auth 
const loginData = reactive({
    email: '', 
    password: ''
})

const handleSubmitForm = async () => {

        try {
            const response = await api.request('/api/auth/login', "POST", JSON.stringify(loginData))

            authStore.login(response.user, response.token, Date.parse(response.tokenExpiration), response.permissions)
            // console.log(authStore.isAuthenticated, authStore.$state)

            authGoodAlert.show(`Welcome ${response.user.name}. You're in!`) 
            router.push('/')
        } catch (error) {
            authErrorAlert.show(error.message)
        }
    
}

// inject topbar menu
const nav = useNavStore()
onMounted(() => { nav.topBarMenus = { groupName: "LOGIN", sublinks: [] } })

// icons
const successIconRounded = defineComponent(SuccessRoundedIcon)

// modal message
const modalMessage = reactive({
    isVisible: false, title: '', text: '',
    show: function(visibility, modalTitle, content) {
        this.isVisible = visibility
        this.title = modalTitle
        this.text = content
    }
})


// auth error alert
const authErrorAlert = reactive({
    isVisible: false, title: "", text: "", 
    show: function(text, title = "") {
        this.isVisible = true
        this.title = title
        this.text = text
        setTimeout(() => {
            this.isVisible = false;
        }, 5000)
    }
})

const authGoodAlert = reactive({
    isVisible: false, title: "", text: "", 
    show: function(text, title = "") {
        this.isVisible = true
        this.title = title
        this.text = text
        setTimeout(() => {
            this.isVisible = false;
        }, 5000)
    }
})

</script>