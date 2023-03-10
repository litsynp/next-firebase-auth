import styled from 'styled-components'

import { Title } from '@src/component/common'
import { FirebaseEmailLoginForm } from '@src/component/login/firebase-login-form'

export function LoginForm() {
  return (
    <StyledForm>
      <Title>Login to your account</Title>
      <FirebaseEmailLoginForm />
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
