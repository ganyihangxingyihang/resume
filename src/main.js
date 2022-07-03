import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

import '@/styles/common.css'
import '@/styles/font.css'

const app = createApp(App)

app.use(router).mount('#app')
app.config.globalProperties.$http = Axios
