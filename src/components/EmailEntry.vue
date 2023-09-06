<script setup lang="ts">
import { ref } from 'vue';
import * as Email from '../email'

const userInput = ref('')
const emailState = ref('empty' as Email.EmailState)

const onInput = (event: Event) => {
  return Email.onInput(event, userInput)
}

const onClick = () => {
  return Email.onClick(emailState, userInput)
}

</script>

<template>
  <div class="flex flex-col gap-3 items-center w-full desktop:flex-row desktop:justify-center">
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
    
    desktop:w-[30rem]
    " 
    :class="Email.borderColor(emailState)"
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
</template>