<script lang="ts" setup>
import { useRoute } from '@kitbag/router';

const settingsRoute = useRoute('settings')
const route = useRoute('settings.keys')
</script>

<template>
  <div class="settings-keys-view">
    <h1>Keys</h1>
    <p>Keys also implements useRoute for additional layering of query params with parent.</p>

    id: {{ route.params.id }} {{  settingsRoute.params.id }}
    sort: {{ route.params.sort }}
    <select v-model="route.params.sort">
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
</template>