const express = require("express")
const session = require("cookie-session")

const app = express()

app.use(session({
	name: "sessionid",
	secret: "alalalalalal",
	maxAge: 3000
}))

app.get("/",(req,res)=>{
	if(!req.session["count"]){
		req.session["count"] = "老子还没有设置好呢"
	}else{
		req.session["count"] = "我设置好了"
	}
	res.send(req.session["count"])
})

app.listen(9999,()=>{
	console.log("启动成功")
})