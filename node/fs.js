/**
 * Created by user on 2016-10-12.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {
     if(req.url=='/favicon.ico'){
         return;
     }
     fs.readdir('../testReact/', function (err,files) {
         //files是存放一个文件夹的数组
         var dirs = [];
         (function iterator(i){//迭代器
             fs.stat('../testReact/'+files[i], function (err,stats) {

             })
         })(0);

     });
});