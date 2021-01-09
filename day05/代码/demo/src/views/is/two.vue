<template>
  <div class="box">
    <h3>努力要是有用的话，还要天才干什么？</h3>
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "李白"
    };
  },
  beforeDestroy(){
      console.log("destroy");
  }
};
</script>

<style>
</style>