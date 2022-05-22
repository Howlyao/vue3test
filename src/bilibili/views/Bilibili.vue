<template>
  <div class="container">
    <router-view></router-view>
    <van-tabbar v-model="active"  route>
      <van-tabbar-item replace to="/bilibili/main-page" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace icon="search">频道</van-tabbar-item>
      <van-tabbar-item replace icon="friends-o">动态</van-tabbar-item>
      <van-tabbar-item replace icon="setting-o">会员购</van-tabbar-item>
      <van-tabbar-item replace to="/bilibili/user-info" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
 
</template>

<script>
export default {
  name: 'Bilibili',
  data() {
    return {
      active: 0
    }
  },
}
</script>

<style scoped>

</style>