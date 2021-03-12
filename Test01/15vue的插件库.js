// vue的插件库 
        // 要向暴露的插件对象
        (function(){
            const MyPlugin = {}
            // 差价对象必须要有一个install
            MyPlugin.install = function(Vue,options){

                // 1添加全局方法或属性
                Vue.myGlobalMethods = function(){
                    console.log('Vue函数对象的方法myGlobalMethods()执行了');
                }

                // 2添加全局资源或者属性 (主要是添加一些指令)
                Vue.directive('upper-text',(el,binding)=>{
                    console.log('指令已经加载');
                    // 将标签中的内容全部换为大写
                    el.textContent = binding.value.toUpperCase();
                })

                // // 3注入组件
                // Vue.mixin({
                //     created:()=>{
                //         // 逻辑

                //     }
                // })

                // 4给vue的实例添加方法
                Vue.prototype.$myMethod = function(){
                    console.log('实例对象的方法$myMethods');
                }
            }
            // 向外暴露此插件
            window.MyPlugin = MyPlugin;
        })()