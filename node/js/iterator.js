/**
 * Created by user on 2016-10-13.
 */
var a = 10;
(function iterator(i){
    if(i==a){
        return;
    }else{
        iterator(i+1);
    };
    console.log(i);
})(0);
//类似递归，因为node中的异步也不是万能的，容易出现问题，这个可以将异步强行换成异步；
