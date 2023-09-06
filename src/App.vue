<script setup lang="ts">
import { onMounted } from 'vue';
import EmailEntry from './components/EmailEntry.vue'

onMounted(() => {
  document.body.className = 'font-libre-franklin'
})
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-8 min-h-screen m-10">
    <p class="text-2xl font-bold pt-20">PING<span class="text-blue">.</span></p>
    <div class="flex flex-col items-center gap-4">
      <p class="text-2xl text-gray">We are launching <span class="font-bold text-black">soon!</span></p>
      <p class="text-sm">Subscribe and get notified</p>
    </div>
    <EmailEntry></EmailEntry>
    <img src="./assets/illustration-dashboard.png">
    <p class="absolute bottom-6 w-full text-center text-xs text-gray">&#169; Copyright Ping. All rights reserved.</p>
  </div>
</template>