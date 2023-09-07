<script setup lang="ts">
import { EmailWidget } from '../email'
defineProps<EmailWidget>()
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-8 min-h-screen m-10">
    <p class="pt-20 text-2xl font-bold">PING<span class="text-blue">.</span></p>
    <div class="flex flex-col items-center gap-4">
      <p class="text-2xl text-gray">
        We are launching <span class="font-bold text-black">soon!</span>
      </p>
      <p class="text-sm">Subscribe and get notified</p>
    </div>
    <div class="flex flex-col gap-3 items-center w-full">
      <input class="
      w-full 
      p-4 
      pl-8

      text-sm 
      
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
      <p v-if="emailState === 'invalid'"
        class="text-light-red text-xs italic pt-1 -mt-2"
        >Please provide a valid email address
      </p>

      <p class="
        w-full
        p-4

        bg-blue 
        text-white 
        text-sm  
        
        rounded-full  
        shadow-xl
        shadow-blue/25
        
        text-center 
        font-semibold 
        
        cursor-pointer"
        @click="onClick"
      >Notify Me</p>
    </div> 
    <img class="" src="../assets/illustration-dashboard.png">
    <p class="absolute bottom-6 w-full text-center text-xs text-gray">&#169; Copyright Ping. All rights reserved.</p>
  </div>  
</template>