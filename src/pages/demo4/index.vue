<template>
    <div>
        <div>计算属性</div>
        <div>------------------------</div>
        <div>{{reverseMessage}}</div>
        <div v-show="isShow">123456</div>
        <ul>
            <li v-for="item in subjects" :key="item.msg">
                {{item.msg}}
            </li>
            <li v-for="(item,index) in subjects" :key="item.msg">
                {{index}} - {{item.msg}}
            </li>
            <div>------------------------</div>
            <li v-for="(value,name,index) in obj" :key="value">
               {{index}} {{name}}: {{value}}
            </li>
            <div>------------------------------------------</div>
            <div v-on:click="say('hi')">
                <button v-on:click.stop="greet">greet</button>
            </div>
            <div>------------------------------------------------------------</div>
            <countdown></countdown>
        </ul>
    </div>
</template>

<script>
import count from '../../components/count.vue'
export default {
    data() {
        return {
            msg:'helloworld',
            isShow:true,
            subjects:[
                {msg:'Java'},
                {msg:'Python'}
            ],
            obj:{
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
        }
    },
    computed: {
        reverseMessage(){
            return this.msg.split('').reverse().join('')
        }
    },
    methods: {
        greet(){
            alert("hello")
        },
        say(e){
            alert(e)
        }
    },
    components:{
        countdown:count
    }
}
</script>