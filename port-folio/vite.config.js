import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import React from 'react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})