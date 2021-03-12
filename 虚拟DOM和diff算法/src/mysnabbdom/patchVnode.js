// 引入创建的createElement 处理方法
import createElement from './createElement'
export default function patchVnode(oldVnode,newVnode){
    // 判断新旧节点是不是同一个节点、 若果是name什么都不用做
    if(newVnode === oldVnode) return;

    // 判断newVnode有没有text属性
    if(newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)){
        console.log('newVnode是有text文本内容的');

        // 如果新的vnode有text内容n那么让新的vnode的text添加到oldvnode上
        if(newVnode.text != oldVnode.text){
            // 即使老的虚拟节点中有children属性 也会强行覆盖
            oldVnode.elm.innerText = newVnode.text
        }
        // 否则vnode就没有text属性
    }else{
        console.log('oldVnode没有text属性');
        // ************************************最复杂**************************************************
        // 然后接着判断老节点有没有children属性
        if(oldVnode.children != undefined && oldVnode.children.length > 0){
            // 这是最复杂的一种情况 老节点存在孩子节点 新节点也存在孩子节点
            // 首先将新的节点遍历
            for(let i=0;i<newVnode.children.length;i++){
                // 然后将遍历出来的子节点存储在ch变量中
                let ch = newVnode.children[i]

                // 定义一个标记变量
                let result = false
                // 然后再遍历老节点
                for(let j=0;j<oldVnode.children.length;j++){
                    if(oldVnode.children[j] == ch.sel && oldVnode.children[j].key == ch.key){
                        // 如果相等那就什么都不做 标记一下新老节点是同一节点
                        result = true
                    }
                }
                // 如果老节点和新节点不同 则直接打印新节点
                if(!result){
                    console.log(ch,i);
                    let dom = createElement(ch);
                    ch.elm = dom
                    oldVnode.elm.insertBefore(dom,oldVnode.children[i].elm)
                }
            }


        }else{
            // 此时老节点不存在孩子节点 新节点存在孩子节点
            // 将新节点创建出来 然后通过遍历 逐个添加在老节点上

            // 清空老的节点
            oldVnode.elm.innerHTML = '';
            // 遍历新的节点
            for(let i=0;i<newVnode.children.length;i++){
                let ch = createElement(newVnode.children[i])
                //将ch中存在的孩子节点遍历出来 然后添加到老节点上
                oldVnode.elm.appendChild(ch)
                // 新的dom没有把老文字覆盖 而文字可以覆盖掉老的dom、所以在插入前要删除老的dom、
            }  
        }
    }
}