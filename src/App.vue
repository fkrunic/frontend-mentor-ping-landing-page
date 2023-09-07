<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Mobile from './screens/Mobile.vue'
import * as Email from './email'

onMounted(() => {
  document.body.className = 'font-libre-franklin'
})

const userInput = ref('')
const emailState = ref('empty' as Email.EmailState)
const widget = Email.buildWidget(userInput, emailState)

</script>

<template>
  <Mobile 
    class="desktop:hidden"
    :onInput="widget.onInput" 
    :onClick="widget.onClick"
    :borderColor="widget.borderColor"
    :emailState="emailState"  
    ></Mobile>
</template>