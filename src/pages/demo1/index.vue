<template>
    <div>
        hello world
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("create")
    }
}
</script>