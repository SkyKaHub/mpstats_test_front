import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import './bootstrap/bootstrap-reboot.min.css';
import './assets/styles/main.scss';

createApp(App).use(router).mount('#app')
