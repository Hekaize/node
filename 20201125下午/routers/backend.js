//导入模块
const express = require('express')
//创建路由模块实例
const router = express.Router()
//
router.get("/index",(req,res)=>{
	res.send('后台首页页面')
})
router.get("/login",(req,res)=>{
	res.send('后台登录页面')
})
router.get("/logout",(req,res)=>{
	res.send('后台退出')
})

//导出模块
module.exports = router