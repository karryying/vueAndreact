<template>
  <div class="box">
      <h1>this is child</h1>
      <div>a:{{a}}  b:{{b}}</div>
      <div>parent传递给我的数据是：{{info}}</div>

      <div>lang:{{j.lang}}</div>
      <input type="text" v-model="j.lang">
  </div>
</template>

<script>

export default {
    props:["a","b","info","j"]
}
</script>

<style>

</style>