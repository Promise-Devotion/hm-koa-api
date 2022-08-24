const Router = require('koa-router')

const router = new Router()

const User = require('../models/user')

router.get('/test', async ctx => {
  ctx.status = 200
  console.log(ctx.query.name)
  ctx.body = {
    msg: 'user works ...'
  }
})
router.get('/userlist', async ctx => {


})

router.post('/register', async ctx => {
  // 判断是否存在
  const findResult = await User.find({
    email: ctx.request.body.email
  })
  if (findResult.length > 0) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: '邮箱已被占用'
    }
  } else {
    const newUser = new User({
      name: ctx.request.body.name,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
    })
    await newUser.save().then((user) => {
      ctx.body = user
      ctx.response.body = {
        code: 200,
        message: '操作成功',
        data: {}
      }
    }).catch(err => {
      console.log(err)
    })
    ctx.response.status = 200
  }
})

router.post('login', async ctx => {
  /**
   * 1、判断用户是否存在
   * 2、查询用户 并返回信息
   */
  const resultUser = await User.find({
    email: ctx.request.body.email
  })
  if (resultUser.length === 0) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      message: '用户不存在',
      data: {}
    }
  } else {

  }
})

module.exports = router.routes()