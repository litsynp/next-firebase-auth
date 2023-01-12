import styled from 'styled-components'

import { FirebaseLoginButton } from '@src/component/login/login-button'

export function LoginForm() {
  return (
    <StyledForm>
      <StyledLoginTitle>Login to your account</StyledLoginTitle>
      <FirebaseLoginButton />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  text-align: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 1rem;
  background: white;
`

const StyledLoginTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
