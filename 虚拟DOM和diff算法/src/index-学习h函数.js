import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h' // helper function for creating vnodes

// 创建出patch函数 它也是diff算法的核心函数
var patch = init([classModule,propsModule,styleModule,eventListenersModule]);

// 创建一个虚拟节点
var myVnode1 = h('a',{props:{
    href:"http://www.atguigu.com",
    // 添加_blank 表示在新窗口中打开
    target:'_blank'
}},'尚硅谷')
console.log(myVnode1);

var myVnode2 = h('div',{},'我是一个盒子')

// h函数还可以嵌套
var myVnode3 = h('ul',{},[
    h('li',{},'苹果'),
    h('li',[
        h('div',[
            h('p','哈哈'),
            h('p','呵呵')
        ])
    ]),
    h('li',{},'香蕉')
])



// 让虚拟节点上树
const container = document.getElementById('container');

// -------------------------------------上树-------------
// 注意一个容器只能让一个节点上树
patch(container,myVnode3);