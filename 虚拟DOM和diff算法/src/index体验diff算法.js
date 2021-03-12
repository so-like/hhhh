import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h' // helper function for creating vnodes

// 创建出patch函数 它也是diff算法的核心函数
var patch = init([classModule,propsModule,styleModule,eventListenersModule]);

// 获取页面盒子 和按钮然后上树
const container = document.getElementById('container')
const btn = document.getElementById('btn')

// 定义虚拟节点vnode1
var vnode1 = h('ul',{},[
    h('li',{key:'A'},'橘子'),
    h('li',{key:'B'},'香蕉'),
    h('li',{key:'C'},'芒果'),
]);

var vnode2 = h('ul',{},[
    h('li',{key:'D'},'猕猴桃'),
    h('li',{key:'A'},'橘子'),
    h('li',{key:'B'},'香蕉'),
    h('li',{key:'C'},'芒果'),
    
]);

patch(container,vnode1)

// 点击按钮改变虚拟节点 然后生成新的也就是vnode2DOM树
btn.onclick  = function(){
    patch(vnode1,vnode2)
}