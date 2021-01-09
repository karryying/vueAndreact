<template>
  <div>
      <h1>父传子案例</h1>
      <v-home></v-home>
      <v-search></v-search>
  </div>
</template>

<script>
import vHome from "./home.vue"
import vSearch from "./search.vue"
export default {
    components:{
        vHome,
        vSearch
    }
}
</script>

<style>

</style>