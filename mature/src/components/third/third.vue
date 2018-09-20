<template>
    <div class="third">
      我是第三页(我有子页面)
      <router-link tag="li" v-for="(item,index) in routes" :key="index" :to="item.path"><a>{{item.name}}</a></router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "third",
      data(){
        return{
          routes:[
            {
              name:'one',
              path:'/third/one'
            },
            {
              name:'two',
              path:'/third/two'
            }
          ]
        }
      }
    }
</script>

<style scoped>
.router-link-active a{
  color: aqua;
}
</style>
