<script lang="ts" setup>
import { useRoute } from '@kitbag/router';
import NavigationBar from '../components/NavigationBar.vue';

const props = defineProps<{ prop1: number}>();
console.log(`Building SettingsView ${props.prop1}`);

const route = useRoute('settings')

const onSetSearch = () => {
  route.params.search = `new_search_${props.prop1}`
}
const onClearSearch = () => {  
  route.params.search = undefined
}
</script>

<template>
  <div class="settings-view">

  {{ prop1 }}

  <NavigationBar>
    <router-link :to="(resolve) => resolve('settings.profile')">Profile</router-link>
    <router-link :to="(resolve) => resolve('settings.keys')">Keys</router-link>
  </NavigationBar>

    <h1>Settings</h1>
    <p>Settings has parent routes (profile and keys) and implements useRoute with v-model on query param.</p>

    <input type="text" placeholder="search" v-model="route.params.search" />

    <router-view/>

    <button @click="onSetSearch">Set Search</button>
    <button @click="onClearSearch">Clear Search</button>
  </div>
</template>