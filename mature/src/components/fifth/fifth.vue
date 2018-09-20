<template>
    <div class="fifth">
      <button @click="goFun">点击进入第三页的子页二</button>
      <a href="https://www.baidu.com">点击进入百度</a>
    </div>
</template>

<script>
    export default {
        name: "fifth",
        methods:{
          goFun:function () {
            this.$router.push("/third/two")
          }
        }
    }
</script>

<style scoped>

</style>
