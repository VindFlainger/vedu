import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router";
import i18n from "./i18n"
import {store} from "./store";
import {addAuthInterceptor} from "./utils/middleware/axios/axiosPipeline";

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)

// call all middleware callbacks
addAuthInterceptor()


app.mount('#app')



