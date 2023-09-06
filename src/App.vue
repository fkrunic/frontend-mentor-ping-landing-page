<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-libre-franklin'
})
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-8 min-h-screen m-10">
    <p class="text-2xl font-bold pt-20">PING.</p>
    <div class="flex flex-col items-center gap-4">
      <p class="text-2xl text-gray">We are launching <span class="font-bold text-black">soon!</span></p>
      <p class="text-sm">Subscribe and get notified</p>
    </div>
    <div class="flex flex-col gap-3 items-center w-full">
      <input class="w-full rounded-full text-sm placeholder-pale-blue outline-none border-[1px] border-solid border-pale-blue p-4 pl-8" type="text" placeholder="Your email address...">            
      <p class="bg-blue text-white text-sm w-full rounded-full p-4 text-center font-semibold shadow-xl">Notify Me</p>
    </div>
    <img src="./assets/illustration-dashboard.png">
    <p class="absolute bottom-6 w-full text-center text-xs text-gray">&#169; Copyright Ping. All rights reserved.</p>
  </div>
</template>