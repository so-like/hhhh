// 路由器模块
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import MessageFile from '../pages/MessageFile'
Vue.use(VueRouter);

// 向外暴露一个路由对象
export default new VueRouter({
    // 定义n个路由器
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/file/:id',
                            component:MessageFile
                        },
                    ]
                },
                {
                    path:'',
                    redirect:'/home/news'
                }
            ]   
        },
        {   
            // 在path路径后添加:属性名 来向路由传递参数
            path:'/about/:id',
            component:About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]

})