function buloloSort(){
    var arr = [12,55,6,8,7,96,11,222,36,75]
    for(var end=arr.length-1;end>0;end--){

        // 优化 设置一个标志 表示数列是有序的
        var result = true


        // 核心是两两比较 比出最大值
        for(var i =1;i<=end;i++){
            if(arr[i]<arr[i-1]){
                var temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
                result = false
            }
        }

        // 如果经过几轮冒泡已经是有序的了 name就直接退出循环
        if(result) break

    }
    console.log(arr);
}
buloloSort()