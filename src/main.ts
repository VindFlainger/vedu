import {createApp} from 'vue'
import './components/components.scss'
import './style.css'
import App from './App.vue'
import {router} from "./router";
import i18n, {loadLocaleMessages} from "./i18n"
import {store} from "./store";
import {addAuthInterceptor} from "./utils/middleware/axios/axiosPipeline";

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)


await loadLocaleMessages()
// call all middleware callbacks
addAuthInterceptor()


app.mount('#app')



