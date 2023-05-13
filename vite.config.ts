import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 8080,
    open: true, // 设置服务启动时是否自动打开浏览器,当此值为字符串时，会被用作 URL 的路径名。
    fs: {
      strict: false,
    },
    // https:true,
    cors: true, // 允许跨域
    proxy: {
      
      "/octopus": {
        target: "http://newdev2.ejcop.com:1081/",
        // target: "https://www.ejcop.com/",
        // target: 'http://newdev2.ejcop.com:9000',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  },
});
