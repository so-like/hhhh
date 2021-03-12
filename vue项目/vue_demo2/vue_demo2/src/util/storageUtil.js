//LocalStorage 存储数据的工具模块
// 向外暴露一个函数还是一个对象 主要看是一个方法还是多个方法
// 定义一个常量
const TODOS_KEY  = "todos_key";
export default{
    // 存数据
    saveTodos(todos){
        window.localStorage.setItem(TODOS_KEY,JSON.stringify(value))
    },
    // 读数据
    readTodos(){
        return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
    }
}