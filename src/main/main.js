import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import pluginTest from '@/main/plugins/pluginTest'
import axios from 'axios'

const app = createApp(App)
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = '/api'

app.config.globalProperties.$axios = axios

app.use(store).use(router).use(ElementPlus).use(pluginTest).mount('#app')
