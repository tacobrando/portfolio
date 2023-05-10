import { createApp } from 'vue'
import './assets/css/animations.scss'
import './assets/css/tailwind.css'
import 'animate.css';

import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
