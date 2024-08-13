<script setup>
import { RouterLink } from 'vue-router'
import TheSearch from './kit/TheSearch.vue'

const data = defineProps(['data'])
console.log(data)
</script>
<template>
  <div class="header">
    <div class="leftNav">
      <RouterLink class="routerlink" :to="{ name: 'home' }">
        <img src="../../public/images/logo.png" alt="" />
      </RouterLink>
      <RouterLink class="routerlink" :to="{ name: 'home' }">首页</RouterLink>
      <RouterLink class="routerlink" :to="{ name: 'home' }">视频专区</RouterLink>
      <RouterLink class="routerlink" :to="{ name: 'home' }">文章专区</RouterLink>
      <!-- <RouterLink>首页</RouterLink> -->
    </div>
    <div class="rightNav">
      <TheSearch></TheSearch>

      <div class="submit-article">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <RouterLink class="routerlink" :to="{ name: 'home' }">投稿</RouterLink>
      </div>

      <RouterLink class="user-login" :to="{ name: 'login' }" @click="data.data.toggleOnOff">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        <!-- <RouterLink class="routerlink">投稿</RouterLink> -->
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80px;
}

.user-login > i {
  font-size: 30px;
  color: #e5e8ed;
}
.submit-article > i {
  padding-right: 5px;
}

.rightNav {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
}
.leftNav {
  display: flex;
  gap: 30px;
  justify-content: start;
  align-items: center;
}
.routerlink {
  text-decoration: none;
}
</style>
