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
//     : '/'
};

