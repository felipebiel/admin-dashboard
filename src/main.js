import { createApp } from 'vue';
import App from './App.vue';
// css global
import '@/scss/core.scss';
import router from './router';
// registro de componentes
import ComponentRegistration from '@/utils/component-registration';

const app = createApp(App);
ComponentRegistration(app);

app.use(router).mount('#app');
