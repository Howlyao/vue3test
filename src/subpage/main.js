import { createApp } from 'vue'
import App from './SubPage.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App)
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = '/api'

app.config.globalProperties.$axios = axios

app.use(router).use(ElementPlus).mount('#app')
