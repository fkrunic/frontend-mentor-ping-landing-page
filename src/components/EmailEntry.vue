<script setup lang="ts">
import { match } from 'ts-pattern'
import { ref } from 'vue';

type EmailState
  = { kind: 'empty' }
  | { kind: 'valid' }
  | { kind: 'invalid' }

const emailState = ref({ kind: 'empty'} as EmailState)

const borderColor = (es: EmailState): string => {
  return match(es)
    .with({ kind: 'empty'}, () => 'border-pale-blue')
    .with({ kind: 'valid'}, () => 'border-pale-blue')
    .with({ kind: 'invalid'}, () => 'border-red')
    .exhaustive()
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
      >    
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
    >Notify Me</p>
  </div>          
</template>