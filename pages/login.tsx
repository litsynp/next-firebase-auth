import Head from 'next/head'

import { GreyContainer } from '@src/component/common/grey-container'
import { LoginForm } from '@src/component/login/login-form'

export default function Login() {
  return (
    <GreyContainer>
      <Head>
        <title>Firebase Auth Tester :: Login</title>
      </Head>

      <main>
        <LoginForm />
      </main>
    </GreyContainer>
  )
}
