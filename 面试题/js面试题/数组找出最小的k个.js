// function take(input,k){
//     if(input.length < k){
//         return []
//     }
//     // 冒泡来遍历数组排序
//     for(let i=0;i<input.length-1;i++){
//         for(let j=0;j<input.length-1-i;j++){
//             if(input[j]>input[j+1]){
//                 var temp = input[j+1]
//                 input[j+1] = input[j]
//                 input[j] = temp
//             }
//         }
//     }
//     // 从0到k进行排序
//     console.log(input.splice(0,k)); 
// }
// take([1,2,5,6,9,8,7],5)


// ***************************第二种办法
function take1(input,k){
    if(input.length < k){
        return []
    }
    var arr1 = input.sort((a,b)=>{a-b})
    console.log(input.splice(0,k));
}
take1([1,2,5,6,9,8,7],5)