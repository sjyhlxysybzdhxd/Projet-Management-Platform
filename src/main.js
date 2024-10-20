import { createApp } from 'vue';
import App from './App.vue';
import "@/assets/less/index.less";
import router from './router';
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';
import api from "@/api/api";
if (import.meta.env.MODE === 'development') {
  import('./api/mock'); // 动态导入 mock.js 文件
}


const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$api = api;
app.use(pinia);
app.use(ElementPlus);
app.use(router).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
