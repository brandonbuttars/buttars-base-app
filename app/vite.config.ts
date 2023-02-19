import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import nesting from 'postcss-nesting'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: {
      plugins: [nesting]
    }
  }
})
