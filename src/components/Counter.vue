<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'; 
import fetchCount from '../utils/fetchCount';

interface Props {
    limit: number;
    alertMessageOnLimit: string;
}

const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: 'can not go any higher',
});

const count = ref<number | null>(0);

onMounted(() => {
  fetchCount(initialCount => {
    count.value = initialCount;
  })
})

function addCount(num:number) {
    if (count.value !== null) {
        if (count.value >= props.limit) {
        alert(props.alertMessageOnLimit)
    }
    count.value += num;
  }
}
</script>

<template>
	<div>
    <h2>Count: {{ count }}</h2>
    <button @click="addCount(1)">Add</button>
  </div>
</template>