import { createApp } from 'vue'
import App from './user_interface/App.vue'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VueViewer)
app.mount('#app')
