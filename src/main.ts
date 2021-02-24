import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.scss'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

console.log(Home, Doc);

const history = createWebHistory()
const router = createRouter({
  history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
