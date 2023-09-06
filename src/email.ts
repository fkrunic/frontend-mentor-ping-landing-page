import { match } from 'ts-pattern'
import { Ref, ref} from 'vue';
import * as EmailValidator from 'email-validator'

export type EmailState = 'empty' | 'valid' | 'invalid'

export const borderColor = (es: EmailState): string => {
  return match(es)
    .with('empty', () => 'border-pale-blue')
    .with('valid', () => 'border-pale-blue')
    .with('invalid', () => 'border-light-red')
    .exhaustive()
}

export const onInput = (event: Event, userInput: Ref<string>): void => {
  const input = (event.target as HTMLInputElement).value
  userInput.value = input
}

export const onClick = (emailState: Ref<EmailState>, userInput: Ref<string>): void => {
  emailState.value = EmailValidator.validate(userInput.value) ? 'valid' : 'invalid'
  console.log(userInput.value + ":" + emailState.value)
}

export interface EmailWidget {
  onInput: (event: Event) => void, 
  onClick: () => void,
  borderColor: (es: EmailState) => string,
  emailState: EmailState  
}

export const buildWidget = (userInput: Ref<string>, emailState: Ref<EmailState>): EmailWidget => {

  const overloadedOnInput = (event: Event): void => {
    return onInput(event, userInput)
  }

  const overloadedOnClick = () => {
    return onClick(emailState, userInput)
  }

  return {
    onInput: overloadedOnInput,
    onClick: overloadedOnClick,
    borderColor,
    emailState: emailState.value
  }
}