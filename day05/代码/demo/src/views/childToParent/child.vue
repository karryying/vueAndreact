<template>
  <div class="box">
      <h1>child</h1>
      <p>name:{{name}}</p>
      <button @click="cw">王昭君</button>
      <button @click="cn('貂蝉')">貂蝉</button>
      <button @click="cn('西施')">西施</button>
  </div>
</template>

<script>
export default {
    props:["name"],
    methods:{
        cw(){
            //通知父组件调用changeWang
            this.$emit("aa")
        },
        cn(name){
            this.$emit("click",name)
        }

    }
}
</script>

<style>

</style>