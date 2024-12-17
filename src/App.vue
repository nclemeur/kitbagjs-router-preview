<script lang="ts" setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar>
    <router-link :to="(resolve) => resolve('home')">Home</router-link>
    <router-link :to="(resolve) => resolve('settings', { id: 5 })">Settings</router-link>
  </NavigationBar>
  
  <router-view />
</template>