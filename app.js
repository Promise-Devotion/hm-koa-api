const Koa = require('koa')
const mongoes = require("mongoose")
const cors = require('koa2-cors');// CORS是一个W3C标准，全称是"跨域资源共享"
const db = require('./config/key').mongoURI
const Router = require('koa-router')
var bodyParser = require('koa-bodyparser');

const users = require('./api/users')
const app = new Koa();
app.use( bodyParser() );

app.use(cors()); //全部允许跨域
// app.use(
//   cors({
//     origin: function (ctx) { //设置允许来自指定域名请求
//       // if (ctx.url === '/test') {
//       //   return '*'; // 允许来自所有域名请求
//       // }
//       return '*' // 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
//     },
//     maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//     credentials: true, //是否允许发送Cookie
//     allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
//   })
// );
const router = new Router()


// 链接数据库
mongoes.connect(db).then(() => {
  console.log('连接成功2222')
})
// app.use(async ctx => {
//   ctx.body = 'Hello koa2 FC7wFGuZBlkhjb06';
// });
// 配置user
router.use('/api/users', users)
//路由
router.get('/', ctx => {
  ctx.body = {
    msg: 'hello koa'
  }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(5000);