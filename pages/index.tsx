import { getAuth } from '@firebase/auth'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Button, Title, WhiteBox } from '@src/component/common'
import { GreyContainer } from '@src/component/common/grey-container'
import Profile from '@src/component/profile'

export default function Home() {
  const auth = getAuth()
  const router = useRouter()

  return (
    <GreyContainer>
      <Head>
        <title>Firebase Auth Tester :: Main</title>
      </Head>

      <main>
        {auth.currentUser ? (
          <Profile email={auth.currentUser.email ?? ''} />
        ) : (
          <WhiteBox>
            <Title>Firebase Auth</Title>
            <Button
              style={{
                marginBottom: '1rem',
              }}
              type='button'
              onClick={() => router.push('/login')}
            >
              Login to your account
            </Button>

            <Button type='button' onClick={() => router.push('/register')}>
              Sign up for an account
            </Button>
          </WhiteBox>
        )}
      </main>
    </GreyContainer>
  )
}
