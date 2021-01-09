<template>
  <div class="toast">
    <div class="text">{{msg}}</div>
  </div>
</template>

<script>
export default {
  props:["msg"],
  mounted() {
    setTimeout(() => {
      //通知父组件 isshow变成false
      this.$emit("hide")
    }, 2000);
  }
};
</script>

<style>
.toast {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.text {
  position: fixed;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
}
</style>