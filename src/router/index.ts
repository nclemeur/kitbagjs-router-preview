import { createRouter, createRoute, query, path } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";
import { sortParam } from "./params";
import { defineAsyncComponent } from "vue";

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  component: HomeView 
})

let d = 0;

const settings = createRoute({
  name: 'settings',
  path: path('/settings/[settingsId]', { settingsId: Number}),
  query: 'search=[?search]',
  component: defineAsyncComponent(() => import('../views/SettingsView.vue'))
}, (route)=> {
  console.log('Setting up props...', route.params.settingsId)
  return { settingsId: route.params.settingsId + (++d)}
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
  query: query('sort=[?sort]', { sort: sortParam }),
  component: defineAsyncComponent(() => import('../views/SettingsKeysView.vue'))
})

export const router = createRouter([home, settings, profile, keys])