import vnode from './vnode'

// 编写一个低配版本的h函数这个函数必须接受三个参数 缺一不可 相当于它的重载能力较弱
// 也就是调用的时候 必须是下面的三种情况之一
// 形态1:   h('sel',{},'文字')
// 形态2:   h('sel',{}，[])
// 继续嵌套一个h函数
// 形态3:   h('sel',{},h())
export default function(sel,data,c){
    // 判断给的参数是不是大于3 如果不大于3那么就不满足
    if(arguments.length != 3)
        throw new Error('对不起你的参数不等于3了，我们是低配版的h函数')
    if(typeof c == 'string' || typeof c == 'number'){
        // 说明现在调用的h函数的是形态1111
        return vnode(sel,data,undefined,c,undefined)
    }else if(Array.isArray(c)){
        // 说明它是形态2222
        // 然后遍历数组c
        let children = []
        // 定义一个children来收集它的第三项
        for(let i = 0;i < c.length;i++){
            // 检查c[i]必须是一个对象
            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))){
                throw new Error('你输入的h函数参数不匹配')
            }
            // 这里的循环不用执行c[i] 也就是子项中的h函数
            // 收集第三个参数到children数组中
        children.push(c[i]);
        }
        // 循环结束了就说明收集完了children
        return vnode(sel,data,children,undefined,undefined)
    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){
        // 说明现在是形态333333
        // 此时传入的c为唯一的children 也不用去执行因为前面的测试语句已经执行了
        let children = [c]
        return vnode(sel,data,children,undefined,undefined)
    }else {
        throw new Error('你输入的第三个参数有误')
    }
};