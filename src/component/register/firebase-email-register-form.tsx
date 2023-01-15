import { ChangeEventHandler, useState } from 'react'

import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import { useRouter } from 'next/router'

import { Button, Input } from '@src/component/common'

export function FirebaseEmailRegisterForm() {
  const auth = getAuth()
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onClick = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await router.push('/login')
    } catch (e: any) {
      const errorCode = e.code
      const errorMessage = e.message
      console.log(errorCode, errorMessage)
    }
  }

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form>
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
        <Button type='button' onClick={onClick}>
          Register
        </Button>
      </form>
    </div>
  )
}
