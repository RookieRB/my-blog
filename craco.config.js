const path = require('path')
const CracoLessPlugin = require('craco-less')


module.exports = {
  // less 
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
  }
}