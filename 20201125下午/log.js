const express = require('express')

// const fs = require('fs')

// const os = require('os')

const app = express()

// const time = require('./js/data')

const per = require("./middlewares/personal");
app.use(per);

app.get('/log',(req,res)=>{
	// let socket = req.socket.remoteAddress
	// let browser = req.headers['user-agent']
	// let _url = req.url
	// let nice = socket+'--^~^---'+time+'--^~^---'+browser+'--^~^---'+_url+'--^~^---'+req.method+os.EOL
	// fs.appendFile(`./logs/${time}.log`,nice,err=>{
	// 	console.log(err)
	// })
	res.send('看看命令行吧您嘞')
})

app.listen(8080,(req,res)=>{
	console.log('启动成功')
})