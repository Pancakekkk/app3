import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 配置svg
import './icons/index.js'
import SvgIcon from './components/SvgIcon/index.vue'

//引入阿里图标库
// import '@/assets/iconfont/iconfont.css'

createApp(App).use(pinia).use(ElementPlus).component('svg-icon', SvgIcon).use(router).mount('#app')
