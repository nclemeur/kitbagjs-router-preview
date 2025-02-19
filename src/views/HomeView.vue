<script lang="ts" setup>
import { useRoute } from '@kitbag/router';

const route = useRoute('home')

const onClearFruits = () => {
  route.params.fruits = [];  
}
const onUseOrangesAndBananas = () => {
  route.params.fruits = ['oranges', 'bananas'];  
}
</script>
<template>
  <div class="home-view">
    <h1>Home</h1>
    <p>Welcome to our tiny demo of kitbag/router!</p>

 <span>Fruits: {{route.params.fruits}}</span>

 <button @click="onClearFruits">Clear Fruits</button>
 <button @click="onUseOrangesAndBananas">Use Oranges And Bananas</button>

    <router-link to="https://router.kitbag.dev" target="_blank">Documentation</router-link>

   
  </div>
</template>
