import { createApp } from 'vue';
import App from './App.vue';
// css global
import '@/scss/core.scss';
import router from './router';

createApp(App).use(router).mount('#app');
