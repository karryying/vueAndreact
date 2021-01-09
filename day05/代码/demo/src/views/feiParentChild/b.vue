<template>
  <div class="box">
    <h1>this is b</h1>
    <div>a传递过来的数据是：{{a}}</div>
    <button @click="send">一弦一柱思华年</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: ""
    };
  },
  mounted() {
    this.Event.$on("sendA", e => {
      this.a = e;
    });
  },
  methods:{
      send(){
          this.Event.$emit("sendA",'一弦一柱思华年')
      }
  }
};
</script>

<style>
</style>