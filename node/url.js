/**
 * Created by user on 2016-10-12.
 */
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var server = http.createServer(function (req,res) {
    var path = url.parse(req.url).pathname;
    var port = url.parse(req.url).port;
    var search = url.parse(req.url,true).query;
    console.log(path);// /4sa5dfsdaf//asdf#kjfkds 端口以后的东西；
    console.log(port);
    console.log(search);
    res.end();
}).listen(3000);
