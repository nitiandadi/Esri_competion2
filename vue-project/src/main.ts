import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import ElementPlus from 'element-plus'
import '@arcgis/core/assets/esri/themes/light/main.scss';
// import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus);
app.use(router)
app.mount('#app')
