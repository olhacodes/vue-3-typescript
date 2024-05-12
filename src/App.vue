<script setup lang="ts">
import { reactive } from "vue";
import Counter from "./components/Counter.vue";

interface AppInfo {
  name: string;
  version: string;
}

const appInfo: AppInfo = reactive({
  name: 'Counter',
  version: '1.0.0',
});

</script>

<template>
	<div>
    <h1>{{ appInfo.name }}</h1>
    <h1>{{ appInfo.version }}</h1>
    <Counter :limit="10" />
  </div>
</template>
