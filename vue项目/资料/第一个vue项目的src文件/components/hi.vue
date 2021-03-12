<template>
    <div id="lol">
        <p>{{msg}}</p>
    </div>
</template>


<script>
export default {//配置对象
    // data()必须是以函数的形式来引入
    data(){
        return{
            msg:'hi我的朋友'
        }
    }
}
</script>


<style>
    #lol{
        width: 200px;
        height: 200px;
        background-color: brown;
    }
</style>