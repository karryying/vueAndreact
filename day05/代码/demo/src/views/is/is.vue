<template>
  <div>
      <h1>is</h1>
      <!-- 1.is 解决标签固定搭配问题 -->
      <ul>
        <li is="v-one"></li>
      </ul>

      <!-- 2.动态组件 -->
      <button @click="comName='v-one'">one</button>
      <button @click="comName='v-two'">two</button>
      <transition
      enter-active-class="animate__animated animate__bounceInLeft"
      >
        <div :is="comName"></div>
      </transition>
  </div>
</template>

<script>
import vOne from "./one.vue"
import vTwo from "./two.vue"
export default {
  components:{
    vOne,
    vTwo
  },
  data(){
    return {
      comName:"v-one"
    }
  }
}
</script>

<style>

</style>