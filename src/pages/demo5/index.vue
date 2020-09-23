<template>
    <div>
        <div>样式绑定三种方式</div>
        <div>--------------------</div>
        <div v-bind:class="{ 'active': isActive, 'text-danger': hasError}">
            class1
        </div>
        <div :class="classObject">class2</div>
        <div :class="[activeClass, errorClass]">class3</div>
        <div v-on:click="changeClass">click</div>
        <div>--------------------</div>
        <div v-bind:style="{'color':activeColor,'fontSize':fontSize + 'px'}">style</div>
        <count></count>
    </div>
</template>

<script>
 import count from '../../components/count.vue'
 export default {   
    data() {
        return {
            isActive: true,
            hasError: true,
            classObject:{
                'active': true, 
                'text-danger': false
            },
            activeClass:'active',
            errorClass:'text-danger',

            activeColor: 'red',
            fontSize: 35
        }
    },
    computed: {
        changeClass(){
            this.activeClass = 'active5'
        }
    },
    components:{
        count
    }
    
}
</script>