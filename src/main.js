import { createApp } from 'vue'
// import './style.css'
import './dashboard.css'
import App from './App.vue'

import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './axios/'

// Axios.defaults.baseURL = 'http://localhost:8000/api/';
// Axios.defaults.headers.common['leela'] = 'gdfsd wghsdgdhkdsd';

createApp(App).use(router).mount("#app");

