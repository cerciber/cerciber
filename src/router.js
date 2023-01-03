import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./user_interface/views/Home.vue";
import WhoAmI from "./user_interface/views/WhoAmI.vue";
import Portfolio from "./user_interface/views/Portfolio.vue";
import CV from "./user_interface/views/CV.vue";
import Pillars from "./user_interface/views/Pillars.vue";
import ContactMe from "./user_interface/views/ContactMe.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // Redireccionar ruta raiz
            path: "/",
            redirect: "/home"
          },
          {
            // Home
            path: "/home",
            component: Home
          },
          {
            // Portfolio
            path: "/whoami",
            component: WhoAmI
          },
          {
            // Portfolio
            path: "/portfolio",
            component: Portfolio
          },
          {
            // Portfolio
            path: "/cv",
            component: CV
          },
          {
            // Portfolio
            path: "/pillars",
            component: Pillars
          },
          {
            // Portfolio
            path: "/contactme",
            component: ContactMe
          },
          {
            // Rutas sin uso
            path: '/:pathMatch(.*)*',
            redirect: "/home"
          },
    ],
  })
  
  export default router;
  