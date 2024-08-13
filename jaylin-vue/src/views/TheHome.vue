<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheLogin from '@/components/TheLogin.vue'
import { ref } from 'vue'

const showLoginComponent = ref(false)

const toggleOnOff = () => (showLoginComponent.value = !showLoginComponent.value)
</script>

<template>
  <div class="container">
    <div class="canvs">
      <div class="content">
        <TheHeader class="header" :data="{ toggleOnOff }"></TheHeader>
        <!-- <RouterView class="main"></RouterView> -->
        <section class="main">
          <div :class="['a', { 'a-visible': showLoginComponent }]">
            <TheLogin> </TheLogin>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
</style>

<style scoped>
.main {
  /* min-height: 100vh; */
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
.a {
  display: none;
}

.a-visible {
  display: block;
}

/* .header {
  flex: 0 0 auto;
}
.main {
  flex: 1 1 auto;
} */
.container {
  width: 100%;
  min-height: 100vh;
  background-color: pink;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.canvs {
  width: 1440px;
  /* height: ; */
  background-color: lightblue;
  min-height: 100vh;
}

.content {
  margin-inline: 140px;
  background-color: aliceblue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
