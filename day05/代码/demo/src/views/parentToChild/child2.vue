<template>
  <div class="box">
      <h3>this is child2</h3>
      <input type="text" v-model="msg">
      <div>msg:{{msg.slice(0,10)}}</div>
      <div>msg2:{{msg2}}</div>
  </div>
</template>

<script>
export default {
    // props:["msg"],
    // props验证
    props:{
        msg:{
            //数据类型约束
            type:String,
            //必传
            required:true
        },
        msg2:{
            //默认值
            default(){
                return "嘻嘻嘻"
            }
        }
    },
}
</script>

<style>

</style>