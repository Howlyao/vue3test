module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:3000', //接口域名
              changeOrigin: true,             //是否跨域
              ws: true,                       //是否代理 websockets
              secure: true,                   //是否https接口
              pathRewrite: {                  //路径重置
                  '^/api': ''
              }
          }
      }
  },
  outputDir: 'dist',  //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint,
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/my-project/'
//     : '/',
  pages: {
    main: {
        entry: 'src/main/main.js',
        // 页面的模板文件
        template: 'public/index.html',
        // build 生成的文件名称  例： dist/index.html
        filename: 'index.html',
        title: 'vue3test',
        // chunks: ['chunk-vendors', 'chunk-common', 'sub1']
    },
    subpage: {
        entry: 'src/subpage/main.js',
        // 页面的模板文件
        template: 'public/index.html',
        // build 生成的文件名称  例： dist/index.html
        filename: 'subpage.html',
        title: 'subpage',
    },
    bilibili: {
        entry: 'src/bilibili/main.js',
        // 页面的模板文件
        template: 'public/index.html',
        // build 生成的文件名称  例： dist/index.html
        filename: 'bilibili.html',
        title: 'bilibili',
    },
    // subpage: 'src/subpage/main.js'
  }
};

