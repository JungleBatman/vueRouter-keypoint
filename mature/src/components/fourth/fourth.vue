<template>
    <div class="fourth">
      我是第四页（我有子页面）
      <router-link tag="li"
                   v-for="(item,index) in routes"
                   :key="index"
                   :to="item.path">
                   <a>{{item.name}}</a>
      </router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "fourth",
      data(){
        return{
          routes:[
            {
              name:'one',
              path:'/fourth/one'
            },
            {
              name:'two',
              path:'/fourth/two'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .router-link-active a{
    color: blue;
  }
</style>
