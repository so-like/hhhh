import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

// 老的节点只有文字 而新的节点是有children属性
const vnode1 = h('section',{},'我是text文本')
// 获取盒子 id名为container
const container = document.getElementById('container')
const btn = document.getElementById('btn')

// 将虚拟节点上树
patch(container,vnode1)


// 定义vnode2  新文本
const vnode2 = h('section',{},'我是新的文本')

// 定义vnode3 新节点 它是有孩子节点的也就是newVnode.text != undefined

const vnode3 = h('section',{},[
    h('p',{},'哈哈哈哈'),
    h('p',{},'嘻嘻嘻嘻'),
    h('p',{},'阿萨大大')
])

btn.onclick = ()=>{
    patch(vnode1,vnode3)
}
