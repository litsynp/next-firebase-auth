import Head from 'next/head'
import styled from 'styled-components'

import { LoginForm } from '@src/component/login/login-form'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Firebase Auth Tester</title>
      </Head>

      <main>
        <LoginForm />
      </main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: grey;
  height: 100vh;
`
