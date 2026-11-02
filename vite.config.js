import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (Noaharon11.github.io) is served from the root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
