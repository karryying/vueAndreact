<template>
  <div class="box">
    <h1>this is parent</h1>
    <div>msg:{{msg}}</div>

    <!-- 父传子：父组件通过自定义属性传值，子组件通过props接收 -->
    <!-- <v-child a="10" b="20" c="30" v-bind:info="msg"></v-child> -->
    <hr />
    <!-- <v-child v-for="item in arr" :key="item" :info="item"></v-child> -->

    <!-- 父组件传递给子组件的数据，父变，子变；子变，父不变，还报错。 -->
    <div>str:{{str}}</div>
    <input type="text" v-model="str">

    <v-child2 :msg="str" :msg2="str2"></v-child2>
    <v-child2 :msg="10+''"></v-child2>
    <v-child2 :msg="'123'"></v-child2>

    <hr>
    <h3>父变 子变 子变 父变</h3>
    <div>lang:{{j.lang}}</div>
    <input type="text" v-model="j.lang">
    <v-child :j="j"></v-child>
  </div>
</template> 

<script>
import vChild from "./child.vue";
import vChild2 from "./child2.vue"
export default {
  components: {
    vChild: vChild,
    vChild2
  },
  data() {
    return {
      msg: "宫本武藏",

      arr: ["凯", "澜", "镜", "耀"],

      str:"等等等等等等等等等等，扣扣的昂颠哒，扣扣得兔颠哒，扣扣的塞颠哒",
      str2:"嘿嘿",

      j:{
        lang:"小乔，要努力变强哦！"
      }
    };
  }
};

/*
let j1={
  name:"zs"
}
let j2=j1 
j2.name="ls"
console.log(j1,j2);
*/
</script>

<style>
</style>