// http_test.js
// var stream = require("stream")
var http = require("http")
// var fs = require("fs")
var server = http.createServer(function(req, res){
	console.log(req.url);
	if (req.url == "/") {
		//如果访问路径是localhost：3000 则显示文件列表
		// var fileList = fs.readdirSync("./");
		res.writeHead(200, {'Content-type': 'text/plain;charset=utf-8'});
		// res.end(fileList.toString());
		res.end("假野猪天下第一!");
	} else {
		// var path = "." + req.url;
		// var readStream = fs.createReadStream(path).pipe(res);
			// var path = req.url;
			// //在路径字符串前加. 表示当前目录 避免在*nix系统下访问“/”文件夹
			// fs.readFile("." + path, function(err, data){
			// 	if(err) {
			// 		console.log(err);
			// 		//如果文件不存在 返回异常
			// 		res.end("Internal Error");
			// 		throw err;
			// 	}
			// 	res.writeHead(200, {"Content-tpye": "text/plain"});
			// 	res.end(data);
			// });
	}
	// res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.end("Hello Node!")

	// res.end('<html><body><h1>Hello World!</h1></body></html>')
});

server.on("connection", function(req, res){
	console.log("on connection");
})

server.on("request", function(req, res){
	console.log("on request");
})

var port = 3000;
server.listen(port);
console.log("Listen on " + port);

//处理异常
process.on("uncaughtException", function(){
	console.log("got Error");
})







