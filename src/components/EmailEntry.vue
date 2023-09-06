<script setup lang="ts">
import { match } from 'ts-pattern'
import { ref } from 'vue';
import * as EmailValidator from 'email-validator'

type EmailState = 'empty' | 'valid' | 'invalid'

const userInput = ref('')
const emailState = ref('empty' as EmailState)

const borderColor = (es: EmailState): string => {
  return match(es)
    .with('empty', () => 'border-pale-blue')
    .with('valid', () => 'border-pale-blue')
    .with('invalid', () => 'border-light-red')
    .exhaustive()
}

const onInput = (event: Event): void => {
  const input = (event.target as HTMLInputElement).value
  userInput.value = input
}

const onClick = (): void => {
  emailState.value = EmailValidator.validate(userInput.value) ? 'valid' : 'invalid'
  console.log(userInput.value + ":" + emailState.value)
}

</script>

<template>
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
      
      placeholder-pale-blue" 
      :class="borderColor(emailState)"
      type="text" 
      placeholder="Your email address..."
      @input="onInput"
      >    
    <p v-if="emailState === 'invalid'"
      class="text-light-red text-xs italic pb-2 -mt-1"
      >Please provide a valid email address</p>
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