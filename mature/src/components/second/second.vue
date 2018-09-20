<template>
    <div class="second">
      <p>我是第二页动态绑定</p>
      <p>下面就是我的参数</p>
      <p>{{ $route.params.id }}</p>
      <p>{{info.id}}</p>
      <p>{{info.name}}</p>
      <p>{{info.age}}</p>
      <p>{{info.face}}</p>
    </div>
</template>

<script>
    export default {
      name: "second",
      data(){
          return{
            ajax:{
              id:'001',
              name:'jungle',
              age:18,
              face:'awesome'
            },
            info:{}
          }
      },
      mounted(){
        this.getInfo();
      },
      methods:{
        getInfo:function () {
          if(this.$route.params.id === '001'){
            this.info = this.ajax;
          }
        }
      }
    }
</script>

<style scoped>

</style>
