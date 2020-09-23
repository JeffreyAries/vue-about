<template>
    <div id="demo7">
        <div>表单组件</div>
        <div>----------------------------------------------</div>
        <input v-model="message" placeholder="edit" />
        <p>message is :{{message}}</p>
        <div>----------------------------------------------</div>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message2 }}</p>
        <textarea v-model="message2" placeholder="please input"></textarea>
        <div>----------------------------------------------</div>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>
        <div>----------------------------------------------</div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label><br>
        <p>checkedNames:{{checkedNames}}</p>
        <div>----------------------------------------------</div>
        <input type="radio" id="yes" value="yes" v-model="picked">
        <label for="yes">yes</label>
        <input type="radio" id="no" value="no" v-model="picked">
        <label for="no">no</label><br>
        <p>picked:{{picked}}</p> 
        <div>----------------------------------------------</div>
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option >A</option>
            <option >B</option>
            <option >C</option>
        </select>
        <p>Selected:{{selected}}</p>
        <div>----------------------------------------------</div>
        <select v-model="selected2">
            <option v-for="option in options" v-bind:value="option.value" :key="option">
                {{option.text}}
            </option>
        </select>
        <p>Selected:{{selected2}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message:"",
            message2:"",
            checked:"true",
            checkedNames:[],
            picked:"",
            selected:"",
            selected2:'',
            options:[
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
}
</script>