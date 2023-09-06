<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = ''
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <p class="text-3xl font-bold underline">
      Hello world!
    </p>
  </div>
</template>