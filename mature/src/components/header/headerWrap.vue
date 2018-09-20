<template>
    <div class="header">
      <ul>
        <router-link tag="li"  to="/" exact><a>首页</a></router-link>
        <router-link tag="li"
                     v-for="(item,index) in routes"
                     :to="item.path"
                     :key="index">
                      <a>{{item.name}}</a>
        </router-link>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "headerWrap",
    data(){
      return{
        ajax:{
            id:'001',
            name:'jungle',
            age:18,
            face:'awesome'
          },
        routes : [
          {
            path: '/first',
            name: '第一页',
          },
          {
            path: '/second',
            name: '第二页',
          },
          {
            path: '/third',
            name: '第三页',
          },
          {
            path: '/fourth',
            name: '第四页',
          },
          {
            path: '/fifth',
            name: '第五页',
          }
        ]
      }
    },
    mounted(){
      this.getInfoFun();
    },
    methods:{
        getInfoFun : function () {
          for(var i=0 ;i<this.routes.length;i++){
            if(this.routes[i].name === '第二页' ){
              this.routes[i].path = '/second/'+this.ajax.id;
            }
          }
        }
    }
  }
</script>

<style scoped>
.header{}
.header ul{
  text-align: center;
  font-size: 0;
  background: #000;
}
.header ul li{
  display: inline-block;
  vertical-align: top;
  padding: 0 10px;
  line-height: 38px;
}
.header ul li a{
  font-size: 20px;
  color: #fff;
}
.header ul li.router-link-active a{
  color: red;
}
</style>
