// import './bootstrap';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createPersistedState } from 'pinia-plugin-persistedstate';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '../css/app.css'
// import { useAuthStore } from './stores/useAuthStore'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

app.mount('#app')


