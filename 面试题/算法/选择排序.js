function selectSort(){
    var arr = [1,5,52,18,44]
    for(var end=arr.length-1;end>0;end--){
        // 首先定义一个最大坐标
        var max = 0
        for(var i=1;i<=end;i++){
            if(arr[max]<=arr[i]){
                max = i
            }
        }
        var temp = arr[max]
        arr[max]= arr[end]
        arr[end] = temp
    }
    console.log(arr);
}
selectSort()