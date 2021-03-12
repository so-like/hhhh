export default function createElement(vnode){
    console.log('目的是把虚拟节点',vnode);
    // 首先获取sel选择器名
    let domNode = document.getElementById(vnode.sel)
    // 判断如果文本不为空 且孩子节点为undefined
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length > 0)){
        domNode.innerText = vnode.text

        vnode.elm = domNode
    }
}