<template>
  <div class="box">
      <h1>this is c</h1>
      <p>a:{{a}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a:""
    }
  },
  mounted(){
    // EventBus
    this.Event.$on("sendA",(e)=>{
      this.a=e
    })
  }
}
</script>

<style>

</style>