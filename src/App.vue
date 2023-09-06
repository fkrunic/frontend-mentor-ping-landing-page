<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-libre-franklin'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <p>PING.</p>
    <p>We are launching <span>soon!</span></p>
    <p>Subscribe and get notified</p>
    <input type="text" placeholder="Your email address...">
    <p>Notify Me</p>
    <img src="./assets/illustration-dashboard.png">
    <p>&#169; Copyright Ping. All rights reserved.</p>
  </div>
</template>