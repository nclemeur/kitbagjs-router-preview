import { createRouter, createRoute, withParams, unionOf, withDefault } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";
import { defineAsyncComponent } from "vue";

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  component: HomeView 
})

const settings = createRoute({
  name: 'settings',
  path: '/settings',
  query: 'search=[?search]',
  component: defineAsyncComponent(() => import('../views/SettingsView.vue'))
})

const profile = createRoute({
  parent: settings,
  name: 'settings.profile',
  path: '/profile',
  component: defineAsyncComponent(() => import('../views/SettingsProfileView.vue'))
})

const keys = createRoute({
  parent: settings,
  name: 'settings.keys',
  path: '/keys',
  query: withParams('sort=[?sort]', { 
    sort: withDefault(unionOf('asc', 'desc'), 'asc') 
  }),
  component: defineAsyncComponent(() => import('../views/SettingsKeysView.vue'))
})

export const router = createRouter([home, settings, profile, keys])