<template>
  <div class="box">
    <h3>这是首页</h3>
    <div>这是轮播图</div>

    <!-- 列表 -->
    <v-list :list="goods"></v-list>
  </div>
</template>

<script>
import vList from "./list.vue";
export default {
  components: {
    vList
  },
  data() {
    return {
      // 1、模拟数据
      goods: [
        {
          id: 1,
          img:
            "https://img14.360buyimg.com/img/s100x100_jfs/t1/79668/25/6008/155537/5d412d9fEd5d5c8ee/6a1b2703a9ed8737.jpg!cc_100x100.webp",
          name: "路由器"
        },
        {
          id: 2,
          img:
            "https://img11.360buyimg.com/img/s100x100_jfs/t1/109147/4/14018/344270/5ea53d73Ed3b9bc8a/10ca404c6c849446.jpg!cc_100x100.webp",
          name: "茅台小王子"
        },
        {
          id: 3,
          img:
            "https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/137831/38/18506/146762/5fd739aaEcedd1087/602da5eada465a6a.jpg.webp",
          name: "护肤品"
        }
      ]
    };
  }
};
</script>

<style>
</style>