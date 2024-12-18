import type { RegisteredRouterReplace, RegisteredRoutesName, ResolvedRoute } from '@kitbag/router'


export const forward = (
  route: ResolvedRoute,
  to: RegisteredRoutesName,
  replace: RegisteredRouterReplace,
) => {
  replace(to, route.params, {
    query: route.query.toString(), // see https://github.com/kitbagjs/router/issues/372
    hash: route.hash,
    state: route.state,
  })
}
