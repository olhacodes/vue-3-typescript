<template>
	<div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.version }}</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'; 
import fetchCount from './utils/fetchCount';

interface AppInfo {
  name: string;
  version: string;
}

const count = ref<number | null>(null);
const appInfo: AppInfo = reactive({
  name: 'Counter',
  version: '1.0.0',
});

onMounted(() => {
  fetchCount(initialCount => {
    count.value = initialCount;
  })
})
</script>
