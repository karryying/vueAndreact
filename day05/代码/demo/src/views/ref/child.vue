<template>
  <div class="box">
      <h2>child</h2>
      <div>name:{{name}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:"大乔"
        }
    },
    methods:{
        changeName(name){
            this.name=name
        }
    }
}
</script>

<style>

</style>