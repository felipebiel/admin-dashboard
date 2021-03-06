import { createApp } from 'vue';
import App from './App.vue';
// css global
import '@/scss/core.scss';
import router from './router';
// registro de componentes
import ComponentRegistration from '@/utils/component-registration';
// Vuetippy
import { plugin as VueTippy } from 'vue-tippy';
import 'tippy.js/dist/tippy.css'; // optional for styling

const app = createApp(App);
ComponentRegistration(app);

app.use(router)
    .use(VueTippy, {
        defaultProps: { placement: 'top', arrow: true },
    })
    .mount('#app');
