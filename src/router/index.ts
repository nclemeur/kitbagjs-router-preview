import { createRouter, createRoute, withParams, unionOf, withDefault, createParam, ParamExtras } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";
import { defineAsyncComponent } from "vue";
import LoginView from "../views/LoginView.vue";


export const stringListParam = 
  createParam({
    get: (value: string, extras: ParamExtras) => {
      if (typeof value !== 'string') {
        return extras.invalid('Expected a string')
      }

      return value.split('|')
    },
    set: (value: string[]) => {
      if (!Array.isArray(value)) {
        return ''
      }
      return value.join('|')
    },
  })

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  query: withParams('fruits=[?fruits]', { 
    fruits: withDefault(stringListParam, ['apple']) 
    // fruits: stringListParam // <= with no default it is working!
  }),
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

const requiresAuth = createRoute({
  name: 'auth',
  path: '/requires-auth',
  onBeforeRouteEnter: (_to, { reject }) => {
    reject('NotAuthorized')
  },
})

export const routes = [home, settings, profile, keys, requiresAuth] as const
export const router = createRouter(routes, {
  rejections: { NotAuthorized: LoginView },
})
