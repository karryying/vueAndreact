<template>
  <div class="page">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "./components/header.vue";
import vMain from "./components/main.vue";
import vFooter from "./components/footer.vue";
export default {
  data(){
    return {
      name:"妲己"
    }
  },
  components: {
    vHeader: vHeader,
    vMain,
    vFooter
  }
};
</script>

<style>

</style>
