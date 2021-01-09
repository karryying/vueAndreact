<template>
  <div class="box">
    <h1>jq</h1>
    <button class="btn1">出现</button>
    <button class="btn2">消失</button>
    <div class="con"></div>
  </div>
</template>

<script>
// import $ from "jquery";

export default {
  mounted() {
    this.$(".btn2").click(()=> {
      this.$(".con").slideUp(400);
    });

    this.$(".btn1").click(() => {
      this.$(".con").slideDown(400);
    });
  }
};
</script>

<style>
.con {
  width: 100px;
  height: 100px;
  background: lawngreen;
}
</style>