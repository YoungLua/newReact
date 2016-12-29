/**
 * Created by user on 2016-10-11.
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (req,res) {//创建web服务器
    //var url = req.url;
    if (req.url == '/') {
        res.writeHead('200', {"content-type": 'text/html'});//设置响应头状态信息
        res.write("hell World");
        console.log(req.url);//请求的路径
        res.end();//断开链接
        //req request res response
    }else if(req.url=="/1"){
         fs.readFile('index.html', function (err,data) {
             res.writeHead(200,{"content-type":"text/html;charset:uft-8"});
             res.write(data);
             res.end();
         });
     }else if(req.url=='/b'){

         fs.readFile('1.html', function (err,data) {
             res.writeHead(200,{"content-type":"text/html;charset:uft-8"});
             res.write(data);
             res.end();
         });

     }
});
server.listen(80);
