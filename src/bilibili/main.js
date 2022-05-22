import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import store from './store'

const app = createApp(App)
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = '/api'

app.config.globalProperties.$axios = axios

app.use(router).use(Vant).use(store).mount('#app')
