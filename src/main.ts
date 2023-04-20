import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Router from "./router/router";
import i18n from "./i18n"
import {store} from "./stores";
import {addAuthInterceptor} from "./utils/middleware/axios/axiosPipeline";
import {createPinia} from "pinia";

const app = createApp(App)

app.use(store)
app.use(Router)
app.use(i18n)

// call all middleware callbacks
addAuthInterceptor()


app.mount('#app')



