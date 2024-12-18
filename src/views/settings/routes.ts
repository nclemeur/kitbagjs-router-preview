import { createRoute, query, path, BeforeRouteHook } from "@kitbag/router";

import { defineAsyncComponent } from "vue";
import { forward } from "../../router/util";
import { sortParam } from "../../router/params";

const redirectHook: BeforeRouteHook = (to, { replace }) => {
  if (to.name === 'settings') {
    forward(to, 'settings.profile', replace)
  }
}

const settings = createRoute({
  name: 'settings',
  path: path('/settings/[id]', { id: Number}),
  query: 'search=[?search]',
  onBeforeRouteUpdate:redirectHook,
  onBeforeRouteEnter: redirectHook,
  component: defineAsyncComponent(() => import('./SettingsView.vue'))
})

const profile = createRoute({
  parent: settings,
  name: 'settings.profile',
  path: '/profile',
  component: defineAsyncComponent(() => import('./SettingsProfileView.vue'))
})

const keys = createRoute({
  parent: settings,
  name: 'settings.keys',
  path: '/keys',
  query: query('sort=[?sort]', { sort: sortParam }),
  component: defineAsyncComponent(() => import('./SettingsKeysView.vue'))
})

export const routes = [
    settings, profile, keys
]