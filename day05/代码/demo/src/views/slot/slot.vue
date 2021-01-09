<template>
  <div>
      <h1>slot</h1>
       <v-one></v-one>
      <v-one>
        <div>排好队，一个一个的来</div>
      </v-one>
      <v-one>
        <div>能群殴，何必单挑呢？</div>
        <div>无敌的我又迷路了</div>
      </v-one>

      <hr>
      <v-two>
        <div slot="shang">一个人的海上起航</div>
        <div slot="xia">翻船</div>
      </v-two>
      <!-- 如果没有写前往哪个具名插槽，哪个都不去 -->
      <v-two>
        <div slot="xia">来和妲己玩耍吧</div>
      </v-two>
     
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
}
</script>

<style>

</style>