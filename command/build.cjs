const path = require('path')
// vite配置
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')


// 打包入口
const entryDir = path.resolve(__dirname, '../packages')

// 出口文件夹
const outDir = path.resolve(__dirname, '../lib')

// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router'], // 不用打包的库
  output: {
    globals: {
      vue: 'Vue' // 使用全局的vue
    }
  }
}
// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'mc-element-components',
        fileName: 'mc-element-components',
        formats: ['es', 'umd']
      },
      outDir
    }
  })
}


const buildLib = async () => {
  await buildAll()
}

buildLib()
