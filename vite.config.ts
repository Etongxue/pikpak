import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  console.log(mode)
  return {
    base: mode === 'development' ? '' : '/pikpak',
    build:{
      chunkSizeWarningLimit: 1500,
  //其他配置这里就省略了 减少点重复代码长度
    }   
    plugins: [vue()],
    server: {
      proxy: {
        '/v1/pages': {
          target: 'https://api.notion.com',
          changeOrigin: true,
        }
      }
    }
  }
})
