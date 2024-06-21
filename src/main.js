import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from '@/i18n.js';
import App from './app.vue';
import router from './router';

// pinia
const pinia = createPinia();

// prime vue integration
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// prime vue components
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Toolbar from 'primevue/toolbar';
import SelectButton from 'primevue/selectbutton';
import Divider from 'primevue/divider';
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import TextArea from 'primevue/textarea';
import InputMask from 'primevue/inputmask';
import Calendar from 'primevue/calendar';
import DataView from 'primevue/dataview';
import ScrollPanel from 'primevue/scrollpanel';
import Toast from 'primevue/toast';

// prime vue services
import ToastService from 'primevue/toastservice';

// app
const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.use(ToastService)

app.use(i18n);
app.use(pinia);
app.use(router);

app.component('pv-toast', Toast)
app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-image', Image)
app.component('pv-toolbar', Toolbar)
app.component('pv-select-button', SelectButton)
app.component('pv-autocomplete', AutoComplete)
app.component('pv-divider', Divider)
app.component('pv-dropdown', Dropdown)
app.component('pv-float-label', FloatLabel)
app.component('pv-sidebar', Sidebar)
app.component('pv-input-text', InputText)
app.component('pv-inline-message', InlineMessage)
app.component('pv-text-area', TextArea)
app.component('pv-input-mask', InputMask)
app.component('pv-calendar', Calendar)
app.component('pv-data-view', DataView)
app.component('pv-scroll-panel', ScrollPanel)

app.mount('#app');
