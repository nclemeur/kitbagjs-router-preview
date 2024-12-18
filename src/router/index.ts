import { createRouter, createRoute, query, path } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";
import { sortParam } from "./params";
import { defineAsyncComponent } from "vue";

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  component: HomeView 
})

const settings = createRoute({
  name: 'settings',
  path: path('/settings/[id]', { id: Number}),
  query: 'search=[?search]',
  onBeforeRouteUpdate: (to, {replace}) => {
    if(to.name === 'settings') {
      // below does not work 
      console.log('HELLO');
      replace('settings.profile', to.params)
    }
  },
  onBeforeRouteEnter: (to, {replace}) => {
    if(to.name === 'settings') {
      // below does not work 
      console.log('HELLO');
      replace('settings.profile', to.params)
    }
  },
  component: defineAsyncComponent(() => import('../views/settings/SettingsView.vue'))
})

const profile = createRoute({
  parent: settings,
  name: 'settings.profile',
  path: '/profile',
  component: defineAsyncComponent(() => import('../views/settings/SettingsProfileView.vue'))
})

const keys = createRoute({
  parent: settings,
  name: 'settings.keys',
  path: '/keys',
  query: query('sort=[?sort]', { sort: sortParam }),
  component: defineAsyncComponent(() => import('../views/settings/SettingsKeysView.vue'))
})

export const router = createRouter([home, settings, profile, keys])