import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { useRouter } from 'next/router'

import { Button, Input } from '@src/component/common'

export function FirebaseEmailLoginForm() {
  const auth = getAuth()
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      await router.push('/')
    } catch (e: any) {
      const errorCode = e.code
      const errorMessage = e.message
      console.error(errorCode, errorMessage)
    }
  }

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <Input
        type='email'
        placeholder='Email'
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        type='password'
        placeholder='Password'
        onChange={onChangePassword}
        value={password}
      />
      <Button type='submit' onClick={onClick}>
        Login via Firebase
      </Button>
    </>
  )
}
