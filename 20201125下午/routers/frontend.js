//导入express模块
const express = require('express')
//创建模块路由对象
const router = express.Router();

//前台路由
router.get("/register",(req,res)=>{
	res.send('前端注册页面')
})
router.get("/login",(req,res)=>{
	res.send('前端登录页面')
})
router.get("/logout",(req,res)=>{
	res.send('前端退出操作')
})

//导出模块
module.exports = router