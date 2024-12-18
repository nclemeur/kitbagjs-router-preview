import { createRouter, createRoute,  } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";

import { routes as settingsRoutes } from "../views/settings/routes";

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  component: HomeView 
})


export const router = createRouter([home, ...settingsRoutes])