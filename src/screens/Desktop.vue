<script setup lang="ts">
import { EmailWidget } from '../email'

defineProps<EmailWidget>()
</script>

<template>
  <div class="flex flex-col justify-start items-center min-h-screen gap-10 my-20">
    <p class="text-3xl font-bold">PING<span class="text-blue">.</span></p>

    <div class="flex flex-col items-center gap-8">
      <p class="text-5xl text-gray">We are launching <span class="font-bold text-black">soon!</span></p>
      <p class="text-lg text-very-dark-blue">Subscribe and get notified</p>
      <div class="relative flex flex-row items-center gap-4">
        <input 
          class="
            p-3
            pl-6
            w-[25rem]          
            
            outline-none  
            border-[1px] 
            border-solid 
            rounded-full
            
            placeholder-pale-blue 
            " 
          :class="borderColor(emailState)"
          type="text" 
          placeholder="Your email address..."
          @input="onInput"
          >
        <p class="
          p-4
          w-[12rem]

          rounded-full
          shadow-xl

          bg-blue
          text-white
          font-semibold
          text-sm
          text-center

          cursor-pointer
          "
          @click="onClick"
          >Notify Me</p>

          <p 
            v-if="emailState === 'invalid'"
            class="absolute top-14 left-6 italic text-light-red text-xs"
            >Please enter a valid email address
          </p>
      </div>
    </div>
    <img class="w-[40rem] pt-10" src="../assets/illustration-dashboard.png">
    <p class="text-center text-xs text-gray pt-10">&#169; Copyright Ping. All rights reserved.</p>
  </div>
</template>