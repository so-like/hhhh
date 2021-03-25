function insert(){
    var arr = [1,5,6,18,2,3,15]
    for (let i = 0; i < array.length; i++) {
        var p = i
        function cmp(a,b){return a-b}
       
        // 判断i进行比较如果他比左边小name就将它交换
        while(p>0 && arr[p]-arr[p-1]<0){
            // 交换两个数
            var temp = arr[p];
            arr[p] = arr[p-1]
            arr[p-1] = temp
            p--
        }
    }
    console.log(arr);
}