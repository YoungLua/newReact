/**
 * Created by user on 2016-10-13.
 */
function test(){
    console.log("我是通过exports暴露出去的");
}
json = {
    say : function () {
        console.log("对象")
    },
    haha:"你好世界",

}
exports.test = test;
exports.json = json;
//暴露属性和方法的时候用到exports;