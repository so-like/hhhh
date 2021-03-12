// 引入vnode函数对旧的DOM节点进行包装
import vnode from './vnode'

// 引入patchVnode(也就是封装的patch新函数)
import patchVnode from './patchVnode'

// 引入一个创建函数
import createElement from './createElement'
// 向外暴露一个函数


export default function(oldVnode,newVnode){
    // 判断oldVnode是虚拟节点 还是Dom节点
    // 如果就节点为空或者旧节点为undefined 那么就说明传入了一个DOM节点 我们需要对DOM节点包装一下
    if(oldVnode.sel == '' || oldVnode.sel == undefined){
        // 通过将标签名转换为小写 而elm就是它自己
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }

    // 判断oldVnode和newVnode是不是同一个节点
    // 判断条件为旧的虚拟节点和新得虚拟节点的key和sel属性相同
    if(oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key){
        console.log('是同一个节点 然后进行精细化比较');
        // 调用这个方法
        patchVnode(oldVnode,newVnode)

    }else{

        // 先插入再暴力删除 不然没有标杆 也就是标识符
        console.log('不是同一个虚拟节点 在插入新的 暴力删除');
        // createElement(newVnode)
        // 创建一个新的newVnode
        let newVnodeElm = createElement(newVnode)
        // 将创建的这个newVnodeElm 插入到旧的节点之前
        if(oldVnode.elm.parentNode && newVnodeElm){
            oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)
        }
        // 删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}