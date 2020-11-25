const fs = require('fs')
const os = require('os')
const time = require('../js/data')

const per = (req,res,next)=>{
	let socket = req.socket.remoteAddress
	let browser = req.headers['user-agent']
	let _url = req.url
	let nice = socket+'--^~^---'+time+'--^~^---'+browser+'--^~^---'+_url+'--^~^---'+req.method+os.EOL
	fs.appendFile(`./logs/${time}.log`,nice,err=>{
		console.log(err)
		next()
	})
}

module.exports = per;