import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteViewSource } from '../src/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ preprocess: [svelteViewSource()] })]
})
