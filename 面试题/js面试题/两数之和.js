function sum(numbers,target){
    // 两个for循环遍历出
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length-1;j++){
            if(numbers[i] = target - numbers[j]){
                return [i+1,j+1]
            }
        }
    }
}