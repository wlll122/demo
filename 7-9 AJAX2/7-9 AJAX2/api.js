/*
	api 集中管理优点：
		1. 方便查找、修改  假如有多个页面使用了同一个url地址，更改了url地址，就不需要同时修改多个页面的url地址，只需要更改api.js中的地址即可
		2. 可以快捷的添加对应的方法   httpserve.js  针对每个功能api做一个集体封装
*/

// 本地调试（环境）  线上调试  网站基地址
// var host = "http://127.0.0.1:8080";
var host = "http://www.bufantec.com/api/test/user/";


// 所有api的集合  一般是直接铺展所有api信息，复杂情况下需要分片
var api = {
	
	// 添加用户
	add: host + "save",
	// 修改用户信息
	edit: host + "updateUserInfo",
	// 删除用户
	del: host + "del",
	// 检查用户名是否已存在
	check: host + "checkUserName",
	// 获取用户列表
	list: host + "list",
	
	// 复杂处理
	user: {
		// 添加用户
		add: "",
		// 修改用户信息
		edit: "",
		// 删除用户
		del: "",
		// 检查用户名是否已存在
		check: "",
		// 获取用户列表
		list: ""
	},
	movie: {
		// 添加电影信息
		add: "",
		// 修改电影信息
		edit: "",
		// 删除电影信息
		del: "",
		// 获取电影列表
		list: ""
	}
	
}


// function postUserMsg (userMsg, callback) {
// 	var xhr = new XMLHttpRequest();
// 	// ...
// }