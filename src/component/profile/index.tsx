import { getAuth } from '@firebase/auth'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { WhiteBox } from '@src/component/common'

export default function Profile({ email }: { email: string }) {
  const auth = getAuth()
  const router = useRouter()

  return (
    <WhiteBox>
      <>
        <div>Hello, {email}!</div>
        <div>You are logged in.</div>
        <StyledLogOutButton
          onClick={async () => {
            await auth.signOut()
            await router.push('/')
          }}
        >
          Logout
        </StyledLogOutButton>
      </>
    </WhiteBox>
  )
}

const StyledLogOutButton = styled.button`
  margin-top: 1rem;
`
