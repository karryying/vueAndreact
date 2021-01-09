<template>
  <div>
    <h1>子传父案例</h1>
    <div class="box">
      <h3>登录页面</h3>
      <button @click="login">登录</button>
    </div>
    <div class="box">
      <h3>注册页面</h3>
      <button @click="isRegister=true">注册</button>
    </div>
    <div class="box">
      <h3>购物车页面</h3>
      <button @click="isAdd=true">加入购物车</button>
    </div>

    <!-- <div class="toast" v-if="isshow">
      <div class="text">登录成功</div>
    </div> -->
    <!-- 登录弹框 -->
    <v-toast msg="登录成功" v-if="isshow" @hide="isshow=false"></v-toast>

    <!-- 注册弹框 -->
    <v-toast msg="注册成功" v-if="isRegister" @hide="isRegister=false"></v-toast>

    <!-- 加入成功 -->
    <v-toast msg="加入购物车成功" v-if="isAdd" @hide="isAdd=false"></v-toast>
  </div>
</template>

<script>
import vToast from "./toast.vue"
export default {
  components:{
    vToast
  },
  data() {
    return {
      isshow: false,
      isRegister:false,
      isAdd:false
    };
  },
  methods: {
    login() {
      this.isshow = true;
      
    }
  }
};
</script>

<style>

</style>