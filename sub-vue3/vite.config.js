import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { name } = require("./package")
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/subapp/sub-vue3/',
  server:{
    port: 7799,
    base: '/',
  },
  build: {
    target: "esnext",
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, "src/main.js"),
      formats: ["umd"],
    },
  },
})
