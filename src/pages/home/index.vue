<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-11-19 09:05:19
 * @FilePath: \excel-to-jsone:\work\vue-project\vue-multi-pages\src\pages\home\index.vue
-->
<template>
  <div>
    <h2>home</h2>
    <a class="link" href="/about">关于我们</a>
    <a class="link" href="/user">用户信息</a>
    <a class="link" href="/setting">设置</a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.link + .link {
  margin-left: 16px;
}
</style>
