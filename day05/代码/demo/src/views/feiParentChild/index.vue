<template>
  <div>
      <h1>非父子通信</h1>
      <v-a></v-a>
      <v-b></v-b>
      <v-c></v-c>
  </div>
</template>

<script>
import vA from "./a.vue"
import vB from "./b.vue"
import vC from "./c.vue"
export default {
    components:{
        vA,
        vB,
        vC
    }
}
</script>

<style>

</style>