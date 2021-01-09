<template>
  <div class="box">
    <h3>这是搜索页</h3>
    <input type="text" placeholder="羽绒服" />
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
      goods: [
        {
          id: 5,
          img:
            "https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/137193/34/6631/191648/5f2fe41fE147a3914/0f108037c98cd137.jpg.webp",
          name: "柜子"
        },
        {
          id: 6,
          img:
            "https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/133618/19/14907/83324/5fa3a41bE3a5013fd/358c2f23d97a5de2.jpg.webp",
          name: "面膜"
        },
        {
          id: 7,
          img:
            "https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/128068/33/2581/237615/5ec76f0aEa21ec652/3d7f4eeea6288556.jpg.webp",
          name: "毛巾"
        },
        {
          id: 8,
          img:
            "https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/116901/4/1787/85801/5e9b1c68E02cb3824/c060c316252807fd.jpg.webp",
          name: "伞"
        }
      ]
    };
  }
};
</script>

<style>
</style>