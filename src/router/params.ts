import { createParam } from "@kitbag/router"

type SortDirection = 'asc' | 'desc'

function isSortDirection(value: unknown): value is SortDirection {
  return !!value && typeof value === 'string' && ['asc', 'desc'].includes(value)
}

export const sortParam = createParam((value, { invalid }) => {
  if (isSortDirection(value)) {
    return value
  }

  throw invalid('value provided does not satisfy ')
}, 'asc')