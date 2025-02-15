import { ResolvedRoute, Router, RouterRoute, useRoute, useRouter } from "@kitbag/router";
import { expectTypeOf, test } from "vitest";
import { router, routes } from "../router";

test('useRouter has correct types', () => {
  type InstalledRouter = ReturnType<typeof useRouter>

  type Source = InstalledRouter extends Router<infer T> ? T : never
  type Expect = typeof routes

  expectTypeOf<Source>().toMatchTypeOf<Expect>()
})

test('useRoute has correct types', () => {
  type Source = ReturnType<typeof useRoute>
  type Expect = RouterRoute<ResolvedRoute<typeof routes[number]>>

  expectTypeOf<Source>().toMatchTypeOf<Expect>()
})

test('router rejections are correct type', () => {
  type Reject = typeof router['reject']
  
  type Source = Reject extends (...args: [infer RejectionType]) => any ? RejectionType : never
  type Expect = 'NotAuthorized' | 'NotFound'

  expectTypeOf<Source>().toMatchTypeOf<Expect>()
})