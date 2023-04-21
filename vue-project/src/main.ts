import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@arcgis/core/assets/esri/themes/light/main.scss';
<<<<<<< HEAD

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus);
app.use(router)
=======
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus);
app.use(router);
>>>>>>> origin/baimain
app.use(pinia)
app.mount('#app')
