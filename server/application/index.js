const Koa    = require("koa")
const App    = new Koa()
const route  = require("koa-route")
const server = require("http").createServer(App.callback())

const CONFIG = require("../config/index")

const io     = require("socket.io")(server)

//监听socket连接
io.on("connection",client => {

})

server.listen(CONFIG.SERVER_PORT, async () => {
  await console.log(`服务在端口${CONFIG.SERVER_PORT}启动`)
})