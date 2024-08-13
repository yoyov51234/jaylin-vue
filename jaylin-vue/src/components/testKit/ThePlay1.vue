<template>
  <div :class="{ active: showLoginComponent }"></div>
</template>

<script setup>
import { ref } from 'vue'

const showLoginComponent = ref(false)
</script>
