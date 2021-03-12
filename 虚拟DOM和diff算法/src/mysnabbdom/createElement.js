// 正真创建节点的函数
// 向外暴露一个函数
export default function createElement(vnode){
    // console.log('目的是把虚拟节点',vnode);
    // 首先获取虚拟节点的sel选择器名
    let domNode = document.createElement(vnode.sel)
    // 判断如果有自己诶按还是有文本
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
        // 如果该付及诶单只有文本节点且他还没有孩子属性name就把它插入到标杆节点pivot之前
        domNode.innerText = vnode.text

        // // 让标杆节点的父元素调用insertBefore方法 来插入新节点
        // pivot.parentNode.insertBefore(domNode,pivot)
        // 补充vnode的elm属性
        vnode.elm = domNode;
       
    }else if(Array.isArray(vnode.children) && vnode.children.length > 0){
        // 如果他的孩子节点还是一个数组或者大于0 就需要递归创建节点
        for(let i = 0;i<vnode.children.length;i++){
            let ch = vnode.children[i];
            // console.log(ch);
            let chDOM = createElement(ch);
            domNode.appendChild(chDOM)
        }
        // 补充vnode的elm属性
       vnode.elm = domNode;
    }
     
    // 返回elm
    return vnode.elm
}