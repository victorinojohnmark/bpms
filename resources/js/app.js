// import './bootstrap';

import {createApp} from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedsate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '../css/app.css'
// import { useAuthStore } from './stores/useAuthStore'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedsate)

app.use(router)
app.use(pinia)

app.mount('#app')


