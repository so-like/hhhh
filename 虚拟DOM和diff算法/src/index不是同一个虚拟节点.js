import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

// 老的节点只有文字 而新的节点是有children属性
const vnode1 = h('h1',{},'你好')

const vnode2 = h('ul',{},[
    h('li',{},'哈哈'),
    h('li',{},'嘿嘿'),
    h('li',{},'嘚嘚')
])
// 获取盒子 id名为container
const container = document.getElementById('container')
const btn = document.getElementById('btn')

// 将虚拟节点上树
patch(container,vnode1)
btn.onclick = ()=>{
    patch(vnode1,vnode2)
}
