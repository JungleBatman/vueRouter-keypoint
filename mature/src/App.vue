<template>
  <div id="app">
    <headerWrap></headerWrap>
    <router-view class="container"/>
    <footerWrap></footerWrap>
  </div>
</template>

<script>
  import headerWrap from "../src/components/header/headerWrap";
  import footerWrap from "../src/components/footer/footerWrap";

export default {
  name: 'App',
  components:{
    headerWrap,
    footerWrap
  }
}
</script>

<style>
.container{
  text-align: center;
}
</style>
