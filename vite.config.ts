import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  test: {
    typecheck: {
      checker: 'vue-tsc',
      ignoreSourceErrors: true,
      include: ['src/**/*.spec-d.ts'],
    },
    include: ['src/**/*.spec.ts'],
    environmentMatchGlobs: [
      ['**\/*.browser.spec.ts', 'happy-dom'],
      ['**\/*.spec.ts', 'node'],
    ],
  },
})
