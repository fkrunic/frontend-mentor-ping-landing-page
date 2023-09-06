<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EmailEntry from './components/EmailEntry.vue'
import * as Email from './email'

onMounted(() => {
  document.body.className = 'font-libre-franklin'
})

const userInput = ref('')
const emailState = ref('empty' as Email.EmailState)

const widget = Email.buildWidget(userInput, emailState)
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-8 min-h-screen m-10 desktop:mx-96 desktop:pb-20">
    <p class="pt-20 text-2xl font-bold desktop:text-3xl">PING<span class="text-blue">.</span></p>
    <div class="flex flex-col items-center gap-4">
      <p class="text-2xl text-gray desktop:text-5xl">
        We are launching <span class="font-bold text-black">soon!</span>
      </p>
      <p class="text-sm desktop:text-xl">Subscribe and get notified</p>
    </div>
    <EmailEntry 
      :onInput="widget.onInput" 
      :onClick="widget.onClick"
      :borderColor="Email.borderColor"
      :emailState="emailState"
      ></EmailEntry>
    <img class="desktop:pt-20" src="./assets/illustration-dashboard.png">
    <p class="absolute bottom-6 w-full text-center text-xs text-gray desktop:-bottom-40">&#169; Copyright Ping. All rights reserved.</p>
  </div>
</template>