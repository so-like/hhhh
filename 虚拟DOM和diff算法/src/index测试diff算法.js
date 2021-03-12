import h from './mysnabbdom/h'

// 定义一个我的虚拟节点
var myvnode1 = h('div',{},[
    h('p',{},'哈哈'),
    h('p',{},'信息'),
    h('p',{},'开我凯'),
    h('p',{},[h('span',{},'唯一的儿子')]),
])


// 拿过来一个例子
var myvnode3 = h('ul',{},[
    h('li',{},'苹果'),
    h('li',{},[
        h('div',{},[
            h('p',{},'哈哈'),
            h('p',{},'呵呵')
        ])
    ]),
    h('li',{},'香蕉')
])

console.log(myvnode3);