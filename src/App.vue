<template>
	<div>
    <h1>{{ appInfo.name }}</h1>
    <h1>{{ appInfo.version }}</h1>
    <h2>Count: {{ count }}</h2>
    <button @click="addCount(1)">Add</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'; 
import fetchCount from './utils/fetchCount';

interface AppInfo {
  name: string;
  version: string;
}

const count = ref<number | null>(0);

const appInfo: AppInfo = reactive({
  name: 'Counter',
  version: '1.0.0',
});

onMounted(() => {
  fetchCount(initialCount => {
    count.value = initialCount;
  })
})

function addCount(num:number) {
  if (count.value !== null) {
    count.value += num;
  }
}
</script>
