/**
 * Created by user on 2016-10-13.
 */
function Ponser(){
    this.name ='世界你好';
    this.age = '大家好，才是真的好';
}
Ponser.prototype = {
    sayhello : function () {
        console.log("我向世界说："+this.name+"。世界回应"+this.age)
    }
}

module.exports = Ponser;
//module.exports 在导出的对象是 数据类型的时候 例如类
//这里是一个对象，构造函数暴露出去了；