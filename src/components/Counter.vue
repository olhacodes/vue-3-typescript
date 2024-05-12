<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'; 
import fetchCount from '../utils/fetchCount';
import ControlBar from './ControlBar.vue';

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
   <ControlBar @add-count="addCount" @reset-count="count = 0"/>
  </div>
</template>