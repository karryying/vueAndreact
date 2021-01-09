<template>
    <div class="main">
        <v-left></v-left>
        <v-right></v-right>
    </div>
</template>
<script>
import vLeft from "./left.vue"
import vRight from "./right.vue"
export default {
    components:{
        vLeft,
        vRight
    }
}
</script>