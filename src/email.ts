import { match } from 'ts-pattern'
import { ref } from 'vue';
import * as EmailValidator from 'email-validator'

type EmailState = 'empty' | 'valid' | 'invalid'

const userInput = ref('')
const emailState = ref('empty' as EmailState)

export const borderColor = (es: EmailState): string => {
  return match(es)
    .with('empty', () => 'border-pale-blue')
    .with('valid', () => 'border-pale-blue')
    .with('invalid', () => 'border-light-red')
    .exhaustive()
}

export const onInput = (event: Event): void => {
  const input = (event.target as HTMLInputElement).value
  userInput.value = input
}

export const onClick = (): void => {
  emailState.value = EmailValidator.validate(userInput.value) ? 'valid' : 'invalid'
  console.log(userInput.value + ":" + emailState.value)
}