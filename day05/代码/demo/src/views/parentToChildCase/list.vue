<template>
   <ul class="list">
      <li class="item" v-for="item in list" :key="item.id">
        <img :src="item.img" alt />
        <h3 class="right">{{item.name}}</h3>
        <div>抢购</div>
      </li>
    </ul>
</template>

<script>
export default {
    props:["list"]
}
</script>

<style>
.item{
    width: 80%;
    margin: 10px auto;
    background: orange;
    display: flex;
    padding: 10px;
}
.item img{
    width: 80px;
    height:80px;
}
.item h3{
    flex: 1;
}
</style>