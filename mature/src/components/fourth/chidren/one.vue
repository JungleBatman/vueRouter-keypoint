<template>
    <div class="one">
      我是子页面一
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
      name: "one",
      data(){
        return{
          routes:[
            {
              name:'one',
              path:'/fourth/one/one'
            },
            {
              name:'two',
              path:'/fourth/one/two'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .router-link-active a{
    color: #00abee;
  }
</style>
