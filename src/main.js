import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/common.css' // 重置样式
import ui from './components/library'
import 'animate.css/animate.compat.css'

const app = createApp(App)
app.use(ui).mount('#app')
