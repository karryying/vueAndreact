<template>
  <div class="box">
    <h1>ref</h1>
    <!-- 1.原生DOM节点 -->
    <button @click="getHeight">点击获取下方div的高度</button>
    <div
      class="aa"
      ref="aa"
    >唧唧复唧唧，木兰当户织！唧唧复唧唧，木兰当户织！唧唧复唧唧，木兰当户织！唧唧复唧唧，木兰当户织！唧唧复唧唧，木兰当户织！唧唧复唧唧，木兰当户织！唧唧复唧唧，木兰当户织！</div>

    <!-- 2.父组件获取子组件实例 -->
    <v-child ref="child"></v-child>

    <button @click="cname('杨玉环')">杨玉环</button>
    <button @click="cname('慈禧')">慈禧</button>
  </div>
</template>

<script>
import vChild from "./child.vue";
export default {
  components: {
    vChild
  },
  methods: {
    getHeight() {
      let div = this.$refs.aa;
      console.log(this.$refs.aa.clientHeight);
      div.style.background = "pink";
    },
    cname(name){
        //调用子组件changeName()
        // console.log(this.$refs.child);
       
        this.$refs.child.changeName(name)
    }
  }
};
</script>

<style scoped>
.aa {
  font-size: 30px;
  width: 600px;
}
</style>