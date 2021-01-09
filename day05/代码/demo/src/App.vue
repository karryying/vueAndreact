<template>
  <div>
    <!-- 1.父传子 -->
    <!-- <v-parent></v-parent> -->

    <!-- 2.父传子案例 -->
    <!-- <v-case></v-case> -->


    <!-- 3.子传父 -->
    <!-- <v-parent2></v-parent2> -->

    <!-- 4.子传父案例 -->
    <!-- <child-to-parent-case></child-to-parent-case> -->

    <!-- 5.非父子通信 -->
    <!-- <fei-parent-child></fei-parent-child> -->

    <!-- 6.jq  -->
    <!-- <v-jq></v-jq> -->


    <!-- 7.ref  -->
    <!-- <v-ref></v-ref> -->

    <!-- 8.is  -->
    <!-- <v-is></v-is> -->

    <!-- 9.slot  -->
    <v-slot></v-slot>
  </div>
</template>

<script>
// 1.引入
import vParent from "./views/parentToChild/parent.vue"
import vCase from "./views/parentToChildCase/index.vue"

import vParent2 from "./views/childToParent/parent.vue"
import childToParentCase from "./views/childToParentCase/index.vue"
import feiParentChild from "./views/feiParentChild/index.vue"

import vJq from "./views/jq/jq.vue"
import vRef from "./views/ref/ref.vue"
import vIs from "./views/is/is.vue"
import vSlot from "./views/slot/slot.vue"
export default {
  // 2.注册
  components:{
    vParent:vParent,
    vCase,
    vParent2,
    childToParentCase,
    feiParentChild,
    vJq,
    vRef,
    vIs,
    vSlot
  }
}
</script>

<style>
.box{
  width: 90%;
  margin: 20px auto;
  border: 2px solid indianred;
}
</style>
