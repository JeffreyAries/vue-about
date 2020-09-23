<template>
    <div>
        <div>选项数据</div>   
        <div>--------------</div>
        <div>{{msg}}</div>
        <div>--------------</div>
        <div>computed:{{aDouble}}</div>
        <div>--------------</div>
        <div @click="say('hi')">点击我</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'helloworld',
            num : 1
        }
    },
    computed: {   //里面定义各种函数
        aDouble(){
            return this.num *2
        }
    },
    methods: {    //定义各种函数用来处理事件
        say(h){
            alert(h)
        }
    },
}
</script>