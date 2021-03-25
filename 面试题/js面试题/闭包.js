function fun(n,o){
    // var n=0,o   //注意fun(0).fun(1) 之后这里的你变为1了
    console.log(o);
    return {
        fun:function(m){
            // var m =1,
            // 在这传入fun(0).fun(1)时  0的时候undefined 1的时候是0 但2的时候 上边 var n=1 了 不再是0了
            return fun(m,n)
        }
    }
}
var a=fun(0)  //undefined 因为只传了一个参
a.fun(1)  //0
a.fun(2)    //0
a.fun(3)   //0
var b=fun(0).fun(1).fun(2).fun(3)    // undefined 0 1 2

var c=fun(0).fun(1)   // 0
c.fun(2)        //1
c.fun(3)        //1