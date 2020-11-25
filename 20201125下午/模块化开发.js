//导入express模块
const express = require('express')

//导入前台模块
const frontend = require('./routers/frontend')

//导入后台模块
const backend = require('./routers/backend')

//创建web实例
const app = express()

//路由
//前台路由
app.use('/frontend',frontend)		//use的第一个参数是虚拟文件夹

//后台路由
app.use('/backend',backend)		//use的第一个参数是虚拟文件夹

//启动服务
app.listen(8080,()=>{
	console.log('启动成功')
})