<template>
  <div class="box">
      <h1>this is a</h1>
      <div>msg:{{msg}}</div>
      <button @click="send">发送msg</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"锦瑟无端五十弦"
        }
    },
    methods:{
        send(){
            //触发自定义事件
            this.Event.$emit("sendA",this.msg)
        }
    },
    mounted(){
        console.log(this.Event);
    }
}
</script>

<style scoped>
h1{
    color:red;
}
</style>