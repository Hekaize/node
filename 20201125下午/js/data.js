var time = () => {
	var date = new Date
	var time1 = (date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString())
	return time1
}

//导出模块
module.exports = time()