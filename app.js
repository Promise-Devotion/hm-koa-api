const Koa = require('koa')
const mongoes = require("mongoose")
const db = require('./config/key').mongoURI
const Router = require('koa-router')
var bodyParser = require('koa-bodyparser');

const users = require('./api/users')
const app = new Koa();
app.use(bodyParser());
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