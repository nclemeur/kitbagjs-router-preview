<script lang="ts" setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar>
    <router-link :to="(resolve) => resolve('home')">Home</router-link>
    <router-link :to="(resolve) => resolve('settings', { settingsId: 1})">Settings 1</router-link>
    <router-link :to="(resolve) => resolve('settings', { settingsId: 2})">Settings 2</router-link>    
  </NavigationBar>
  
  <router-view />
</template>