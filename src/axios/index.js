import axios from 'axios'

window.axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_APP_API //'http://localhost:8000/api/'

axios.interceptors.request.use(function(config) {
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    return config;
})