<template>
  <div>
    <button @click="isshow=true">删除</button>
    <div class="mask" v-show="isshow" @click.self="cancel">
      <div class="con">
        <h3>你确定要删除吗？</h3>
        <button @click="cancel">取消</button>
        <button>删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false
    };
  },
  methods:{
      cancel(){
          this.isshow=false
      }
  }
};
</script>

<style>
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}

.con {
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  background: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>