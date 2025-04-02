const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target : serverOrigin, // 변경할 origin
        changeOrigin : true,   // changeOrigin : true로 해야 target이 변경된다.
        ws : false,            // 웹 소켓. (소켓 = 알림이나 채팅이나 같은 기능을 구현할때 쓰는 가장 기반이 되는 기법)
        pathRewrite : { '^/api' : '/'} // '/api'를 백엔드 요청 시 제거 (/api로 백엔드 요청할 경우 /api를 지우고 http://....으로 경로 재작성을 해줌.)
      }
    }
  }
})
