import Head from 'next/head'

import { GreyContainer } from '@src/component/common/grey-container'
import { RegisterForm } from '@src/component/register/register-form'

export default function Register() {
  return (
    <GreyContainer>
      <Head>
        <title>Firebase Auth Tester :: Register</title>
      </Head>

      <main>
        <RegisterForm />
      </main>
    </GreyContainer>
  )
}
