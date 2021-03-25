

function fibonacci(n) {
    // 定义两个数和 
    let num1 = 1
    let num2 = 1
    for(var i=2;i<n;i++){
        // 新的num2的值等于num1+num2
        num2+=num1
        // 新的num1的值等于num2-num1
        num1 = num2 - num1
    }
    return num2
}