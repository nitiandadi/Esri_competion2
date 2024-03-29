import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@arcgis/core": path.resolve(__dirname, "node_modules/@arcgis/core"),
    }
  },
  server: {
    proxy: {
      '/api/v1': {
        target: "https://api.map.baidu.com/traffic/v1/road?ak=IzCONMfUjk7k3lTCIwe5w9shHHyXm5R3", //跨域地址
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, ''),

      },
      '/api/v2': {
        target: 'https://aip.baidubce.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v2/, '/rpc/2.0/nlp/v2')
      },
      '/api/v3': {
        target: 'https://nlp.tencentcloudapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  }
})
