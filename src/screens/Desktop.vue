<script setup lang="ts">
import { EmailWidget } from '../email'

defineProps<EmailWidget>()
</script>

<template>
  <div class="flex flex-col justify-start items-center min-h-screen">
    <p class="text-3xl font-bold">PING<span class="text-blue">.</span></p>
    <p class="text-5xl text-gray">We are launching <span class="font-bold text-black">soon!</span></p>
    <p>Subscribe and get notified</p>
    <div class="flex flex-row items-center">
      <input type="text" placeholder="Your email address...">
      <p class="bg-blue">Notify Me</p>
    </div>
    <img src="../assets/illustration-dashboard.png">
    <p class="text-center text-xs text-gray">&#169; Copyright Ping. All rights reserved.</p>
  </div>
</template>