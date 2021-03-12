export default function(sel,data,children,text,elm){
    const key = data.key
    return {
        // 返回一个对象(对象为上面的参数)
        sel,data,children,text,elm,key
    }
}