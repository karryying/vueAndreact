<template>
  <div class="box">
    <h1>parent</h1>
     <div>name:{{name}}</div> 
     <!--
    子传父：
    目的：子组件要调用父组件的方法，从而修改父组件的值
    实现：父组件绑定一个自定义事件，子组件通过$emit()触发
    -->
    <button @click="changeWang">王昭君</button>
    <v-child :name="name"  @aa="changeWang" @click="changeName($event)" @mouseover.native="over"></v-child>
  </div>
</template>

<script>
import vChild from "./child.vue";
export default {
  components: {
    vChild
  },
  data() {
    return {
      name: "妲己"
    };
  },
  methods: {
    changeWang() {
      this.name = "王昭君";
    },
    changeName(name){
        console.log(name);
        this.name=name;
    },
    over(){
        console.log("over");
    }
  }
};
</script>

<style>
</style>