<template>
    <div>
        <div>模板语法</div>
        <div>-------------------</div>
        <div>
            data:{{msg}}
        </div>
        <div>-------------------</div>
        <div>{{number + 1}}</div>
        <div>-------------------</div>
        <div v-html="rawHtml"></div>
        <div>-------------------</div>
        <div v-bind:class = "red"></div>
        <div>-------------------</div>
        <div @click="change">修改颜色</div>
        <div>-------------------</div>
        <div v-on:click="say('hi')">点击say hi</div>
        <div>-------------------</div>
        <div>{{message | cap}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'helloworld',
            number:3,
            rawHtml:'<span>123</span>',
            red:'red active'
        }
    },
    methods: {
        change(){
            this.red = 'blue'
        },
        say(e){
            alert(e)
        }
    },
    filters:{
        cap(){
            return 123
        }
    },
}
</script>