import styled from 'styled-components'

import { Title } from '@src/component/common'
import { FirebaseEmailRegisterForm } from '@src/component/register/firebase-email-register-form'

export function RegisterForm() {
  return (
    <StyledForm>
      <Title>Register</Title>
      <FirebaseEmailRegisterForm />
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
