<template>
    <div>
        <div>Vue中Dom操作</div>
        <div>--------------------------------------------</div>
        <div ref="head" id="head"></div>

        <router-link to="../demo3">demo3</router-link>
        <div>--------------------------------------------</div>
        <router-link :to="{name:'demo7',params:{userId:456}}">params</router-link>
    </div>
</template>

<script>
import count from '../../components/count.vue'
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        document.getElementById('head').innerHTML = 'helloworld'
        this.$refs.head.innerHTML = 'goodboy'
    },
    components:{
        count
    }
}
</script>